import { init } from "./init";
import { addAlgoliaAgent } from "./_algoliaAgent";
import { getUserToken, setUserToken, onUserTokenChange } from "./_tokenUtils";
import {
  clickedObjectIDsAfterSearch,
  clickedObjectIDs,
  clickedFilters
} from "./click";
import {
  convertedObjectIDsAfterSearch,
  convertedObjectIDs,
  convertedFilters
} from "./conversion";
import { viewedObjectIDs, viewedFilters } from "./view";
import { getVersion } from "./_getVersion";
import { makeSendEvents } from "./_sendEvent";

export type InsightsMethodMap = {
  init: Parameters<typeof init>;
  getVersion: Parameters<typeof getVersion>;
  addAlgoliaAgent: Parameters<typeof addAlgoliaAgent>;
  setUserToken: Parameters<typeof setUserToken>;
  getUserToken: Parameters<typeof getUserToken>;
  onUserTokenChange: Parameters<typeof onUserTokenChange>;
  clickedObjectIDsAfterSearch: Parameters<typeof clickedObjectIDsAfterSearch>;
  clickedObjectIDs: Parameters<typeof clickedObjectIDs>;
  clickedFilters: Parameters<typeof clickedFilters>;
  convertedObjectIDsAfterSearch: Parameters<
    typeof convertedObjectIDsAfterSearch
  >;
  convertedObjectIDs: Parameters<typeof convertedObjectIDs>;
  convertedFilters: Parameters<typeof convertedFilters>;
  viewedObjectIDs: Parameters<typeof viewedObjectIDs>;
  viewedFilters: Parameters<typeof viewedFilters>;
  sendEvents: Parameters<ReturnType<typeof makeSendEvents>>;
};

type MethodType<MethodName extends keyof InsightsMethodMap> = (
  method: MethodName,
  ...args: InsightsMethodMap[MethodName]
) => void;

export type Init = MethodType<"init">;

export type GetVersion = MethodType<"getVersion">;

export type AddAlgoliaAgent = MethodType<"addAlgoliaAgent">;

export type SetUserToken = MethodType<"setUserToken">;

export type GetUserToken = MethodType<"getUserToken">;

export type OnUserTokenChange = MethodType<"onUserTokenChange">;

export type ClickedObjectIDsAfterSearch =
  MethodType<"clickedObjectIDsAfterSearch">;

export type ClickedObjectIDs = MethodType<"clickedObjectIDs">;

export type ClickedFilters = MethodType<"clickedFilters">;

export type ConvertedObjectIDsAfterSearch =
  MethodType<"convertedObjectIDsAfterSearch">;

export type ConvertedObjectIDs = MethodType<"convertedObjectIDs">;

export type ConvertedFilters = MethodType<"convertedFilters">;

export type ViewedObjectIDs = MethodType<"viewedObjectIDs">;

export type ViewedFilters = MethodType<"viewedFilters">;

export type SendEvents = MethodType<"sendEvents">;

export type InsightsClient = (<MethodName extends keyof InsightsMethodMap>(
  method: MethodName,
  ...args: InsightsMethodMap[MethodName]
) => void) & { version?: string };

export type InsightsEventType = "click" | "conversion" | "view";

export type InsightsEvent = {
  eventType: InsightsEventType;

  eventName: string;
  userToken?: string | number;
  timestamp?: number;
  index: string;

  queryID?: string;
  objectIDs?: string[];
  positions?: number[];

  filters?: string[];
};

export type InsightsAdditionalEventParams = {
  headers?: Record<string, string>;
};
