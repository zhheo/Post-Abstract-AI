import { supportsNodeHttpModule } from "./featureDetection";

import { requestWithNodeHttpModule } from "./request";

export function getRequesterForNode() {
  if (supportsNodeHttpModule()) {
    return requestWithNodeHttpModule;
  }

  throw new Error(
    "Could not find a supported HTTP request client in this environment."
  );
}
