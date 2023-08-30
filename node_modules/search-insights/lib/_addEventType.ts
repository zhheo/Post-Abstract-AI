import { InsightsEvent, InsightsEventType } from "./types";

export function addEventType(
  eventType: InsightsEventType,
  params: Array<Omit<InsightsEvent, "eventType">>
): InsightsEvent[] {
  return params.map((event) => ({
    eventType,
    ...event
  }));
}
