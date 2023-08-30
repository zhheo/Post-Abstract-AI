export const supportsCookies = () => {
  try {
    return Boolean(navigator.cookieEnabled);
  } catch (e) {
    return false;
  }
};

export const supportsSendBeacon = () => {
  try {
    return Boolean(navigator.sendBeacon);
  } catch (e) {
    return false;
  }
};

export const supportsXMLHttpRequest = () => {
  try {
    return Boolean(XMLHttpRequest);
  } catch (e) {
    return false;
  }
};

export const supportsNodeHttpModule = () => {
  try {
    const { request: nodeHttpRequest } = require("http");
    const { request: nodeHttpsRequest } = require("https");
    return Boolean(nodeHttpRequest) && Boolean(nodeHttpsRequest);
  } catch (e) {
    return false;
  }
};
