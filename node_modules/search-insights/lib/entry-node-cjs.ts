import AlgoliaAnalytics from "./insights";
import { getFunctionalInterface } from "./_getFunctionalInterface";
import { getRequesterForNode } from "./utils/getRequesterForNode";
import { processQueue } from "./_processQueue";
import { createInsightsClient } from "./_createInsightsClient";

export {
  getRequesterForNode,
  AlgoliaAnalytics,
  getFunctionalInterface,
  processQueue
};
export * from "./types";

export default createInsightsClient(getRequesterForNode());
