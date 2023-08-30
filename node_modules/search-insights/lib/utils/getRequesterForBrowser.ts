import { supportsSendBeacon, supportsXMLHttpRequest } from "./featureDetection";

import { requestWithSendBeacon, requestWithXMLHttpRequest } from "./request";

export function getRequesterForBrowser() {
  if (supportsSendBeacon()) {
    return requestWithSendBeacon;
  }

  if (supportsXMLHttpRequest()) {
    return requestWithXMLHttpRequest;
  }

  throw new Error(
    "Could not find a supported HTTP request client in this environment."
  );
}
