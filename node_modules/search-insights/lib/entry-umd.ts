import AlgoliaAnalytics from "./insights";
import { getRequesterForBrowser } from "./utils/getRequesterForBrowser";
import { processQueue } from "./_processQueue";
import { RequestFnType } from "./utils/request";
import { version } from "../package.json";

export function createInsightsClient(requestFn: RequestFnType) {
  const instance = new AlgoliaAnalytics({ requestFn });
  if (typeof window === "object") {
    // Process queue upon script execution
    processQueue.call(instance, window);
  }

  instance.version = version;
  return instance;
}

export default createInsightsClient(getRequesterForBrowser());
