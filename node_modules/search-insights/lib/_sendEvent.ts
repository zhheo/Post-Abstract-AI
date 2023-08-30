import { RequestFnType } from "./utils/request";
import { InsightsAdditionalEventParams, InsightsEvent } from "./types";
import { isUndefined } from "./utils";
import AlgoliaAnalytics from "./insights";

export function makeSendEvents(requestFn: RequestFnType) {
  return function sendEvents(
    this: AlgoliaAnalytics,
    eventData: InsightsEvent[],
    additionalParams?: InsightsAdditionalEventParams
  ) {
    if (this._userHasOptedOut) {
      return;
    }
    const hasCredentials =
      (!isUndefined(this._apiKey) && !isUndefined(this._appId)) ||
      (additionalParams?.headers?.["X-Algolia-Application-Id"] &&
        additionalParams?.headers?.["X-Algolia-API-Key"]);
    if (!hasCredentials) {
      throw new Error(
        "Before calling any methods on the analytics, you first need to call the 'init' function with appId and apiKey parameters or provide custom credentials in additional parameters."
      );
    }

    if (!this._userToken && this._anonymousUserToken) {
      this.setAnonymousUserToken(true);
    }

    const events: InsightsEvent[] = eventData.map((data) => {
      const { filters, ...rest } = data;

      const payload: InsightsEvent = {
        ...rest,
        userToken: data?.userToken ?? this._userToken
      };
      if (!isUndefined(filters)) {
        payload.filters = filters.map(encodeURIComponent);
      }
      return payload;
    });

    return sendRequest(
      requestFn,
      this._ua,
      this._endpointOrigin,
      events,
      this._appId,
      this._apiKey,
      additionalParams?.headers
    );
  };
}

function sendRequest(
  requestFn: RequestFnType,
  userAgents: string[],
  endpointOrigin: string,
  events: InsightsEvent[],
  appId?: string,
  apiKey?: string,
  additionalHeaders: InsightsAdditionalEventParams["headers"] = {}
) {
  const {
    ["X-Algolia-Application-Id"]: providedAppId,
    ["X-Algolia-API-Key"]: providedApiKey,
    ...restHeaders
  } = additionalHeaders;
  // Auth query
  const headers: Record<string, string> = {
    "X-Algolia-Application-Id": providedAppId ?? appId,
    "X-Algolia-API-Key": providedApiKey ?? apiKey,
    "X-Algolia-Agent": encodeURIComponent(userAgents.join("; ")),
    ...restHeaders
  };

  const queryParameters = Object.keys(headers)
    .map((key) => `${key}=${headers[key]}`)
    .join("&");

  const reportingURL = `${endpointOrigin}/1/events?${queryParameters}`;
  return requestFn(reportingURL, { events });
}
