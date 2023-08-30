import { isFunction } from "./utils";
import AlgoliaAnalytics from "./insights";
import { InsightsClient } from "./types";

export function getFunctionalInterface(
  instance: AlgoliaAnalytics
): InsightsClient {
  return (functionName, ...functionArguments) => {
    if (functionName && isFunction((instance as any)[functionName])) {
      // @ts-ignore
      instance[functionName](...functionArguments);
    } else {
      console.warn(`The method \`${functionName}\` doesn't exist.`);
    }
  };
}
