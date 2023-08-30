import AlgoliaAnalytics from "./insights";
import { getFunctionalInterface } from "./_getFunctionalInterface";
import { RequestFnType } from "./utils/request";
import { createUUID } from "./utils/uuid";
import { version } from "../package.json";

export function createInsightsClient(requestFn: RequestFnType) {
  const aa = getFunctionalInterface(new AlgoliaAnalytics({ requestFn }));

  if (typeof window === "object") {
    if (!window.AlgoliaAnalyticsObject) {
      let pointer: string;
      do {
        pointer = createUUID();
      } while (window[pointer as any] !== undefined);
      window.AlgoliaAnalyticsObject = pointer;
      (window as any)[window.AlgoliaAnalyticsObject] = aa;
    }
  }

  aa.version = version;

  return aa;
}
