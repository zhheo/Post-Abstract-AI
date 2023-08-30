import { isUndefined, isNumber } from "./utils";
import { DEFAULT_ALGOLIA_AGENTS } from "./_algoliaAgent";
import objectAssignPolyfill from "./polyfills/objectAssign";
import { MONTH } from "./_tokenUtils";
import AlgoliaAnalytics from "./insights";

objectAssignPolyfill();

type InsightRegion = "de" | "us";
const SUPPORTED_REGIONS: InsightRegion[] = ["de", "us"];

export interface InitParams {
  apiKey?: string;
  appId?: string;
  userHasOptedOut?: boolean;
  anonymousUserToken?: boolean;
  useCookie?: boolean;
  cookieDuration?: number;
  region?: InsightRegion;
  userToken?: string;
  partial?: boolean;
  host?: string;
}

/**
 * Binds credentials and settings to class
 * @param options: initParams
 */
export function init(this: AlgoliaAnalytics, options: InitParams = {}) {
  if (
    !isUndefined(options.region) &&
    SUPPORTED_REGIONS.indexOf(options.region) === -1
  ) {
    throw new Error(
      `optional region is incorrect, please provide either one of: ${SUPPORTED_REGIONS.join(
        ", "
      )}.`
    );
  }
  if (
    !isUndefined(options.cookieDuration) &&
    (!isNumber(options.cookieDuration) ||
      !isFinite(options.cookieDuration) ||
      Math.floor(options.cookieDuration) !== options.cookieDuration)
  ) {
    throw new Error(
      `optional cookieDuration is incorrect, expected an integer.`
    );
  }

  if (__DEV__) {
    console.info(`Since v2.0.4, search-insights no longer validates event payloads.
You can visit https://algolia.com/events/debugger instead.`);
  }

  setOptions(this, options, {
    _userHasOptedOut: !!options.userHasOptedOut,
    _region: options.region,
    _host: options.host,
    _anonymousUserToken: options.anonymousUserToken ?? true,
    _useCookie: options.useCookie ?? false,
    _cookieDuration: options.cookieDuration || 6 * MONTH
  });

  this._endpointOrigin =
    this._host ||
    (this._region
      ? `https://insights.${this._region}.algolia.io`
      : "https://insights.algolia.io");

  // user agent
  this._ua = [...DEFAULT_ALGOLIA_AGENTS];

  if (options.userToken) {
    this.setUserToken(options.userToken);
  } else if (!this._userToken && !this._userHasOptedOut && this._useCookie) {
    this.setAnonymousUserToken();
  }
}

type ThisParams = Pick<
  AlgoliaAnalytics,
  | "_userHasOptedOut"
  | "_anonymousUserToken"
  | "_useCookie"
  | "_cookieDuration"
  | "_region"
  | "_host"
>;

function setOptions(
  target: AlgoliaAnalytics,
  { partial: partial, ...options }: InitParams,
  defaultValues: ThisParams
) {
  if (!partial) {
    Object.assign(target, defaultValues);
  }

  Object.assign(
    target,
    (Object.keys(options) as Array<keyof typeof options>).reduce(
      (acc, key) => ({ ...acc, [`_${key}`]: options[key] }),
      {}
    )
  );
}
