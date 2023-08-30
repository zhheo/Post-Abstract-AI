import { request as nodeRequest } from "http";
import { UrlWithStringQuery } from "url";

export type RequestFnType = (url: string, data: object) => Promise<boolean>;

export const requestWithSendBeacon: RequestFnType = (url, data) => {
  const serializedData = JSON.stringify(data);
  const beacon = navigator.sendBeacon(url, serializedData);
  return Promise.resolve(beacon ? true : requestWithXMLHttpRequest(url, data));
};

export const requestWithXMLHttpRequest: RequestFnType = (url, data) => {
  return new Promise((resolve, reject) => {
    const serializedData = JSON.stringify(data);
    const req = new XMLHttpRequest();
    req.addEventListener("readystatechange", () => {
      if (req.readyState === 4 && req.status === 200) {
        resolve(true);
      } else if (req.readyState === 4) {
        resolve(false);
      }
    });
    req.addEventListener("error", () => reject());
    req.addEventListener("timeout", () => resolve(false));
    req.open("POST", url);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("Content-Length", `${serializedData.length}`);
    req.send(serializedData);
  });
};

export const requestWithNodeHttpModule: RequestFnType = (url, data) => {
  return new Promise((resolve, reject) => {
    const serializedData = JSON.stringify(data);
    const { protocol, host, path }: UrlWithStringQuery =
      require("url").parse(url);
    const options = {
      protocol,
      host,
      path,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": serializedData.length
      }
    };

    const { request }: { request: typeof nodeRequest } = url.startsWith(
      "https://"
    )
      ? require("https")
      : require("http");
    const req = request(options, ({ statusCode }) => {
      if (statusCode === 200) {
        resolve(true);
      } else {
        resolve(false);
      }
    });

    req.on("error", (error: any) => {
      console.error(error);
      reject(error);
    });
    req.on("timeout", () => resolve(false));

    req.write(serializedData);
    req.end();
  });
};
