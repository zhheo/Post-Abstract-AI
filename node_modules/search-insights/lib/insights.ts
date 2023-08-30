import objectAssignPolyfill from "./polyfills/objectAssign";
import objectKeysPolyfill from "./polyfills/objectKeys";

objectKeysPolyfill();
objectAssignPolyfill();

import { makeSendEvents } from "./_sendEvent";

import { init } from "./init";
import { addAlgoliaAgent } from "./_algoliaAgent";
import { getVersion } from "./_getVersion";

import { RequestFnType } from "./utils/request";

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
import {
  getUserToken,
  setUserToken,
  setAnonymousUserToken,
  onUserTokenChange,
  MONTH
} from "./_tokenUtils";
import { version } from "../package.json";

type Queue = {
  queue: string[][];
};

type AnalyticsFunction = {
  [key: string]: (fnName: string, fnArgs: any[]) => void;
};

export type AlgoliaAnalyticsObject = Queue | AnalyticsFunction;

declare global {
  interface Window {
    AlgoliaAnalyticsObject?: string;
  }
}

/**
 *  AlgoliaAnalytics class
 */
class AlgoliaAnalytics {
  _apiKey?: string;
  _appId?: string;
  _region?: string;
  _host?: string;
  _endpointOrigin = "https://insights.algolia.io";
  _anonymousUserToken = true;
  _userToken?: string | number;
  _userHasOptedOut = false;
  _useCookie = false;
  _cookieDuration = 6 * MONTH;

  // user agent
  _ua: string[] = [];

  _onUserTokenChangeCallback?: (userToken?: string | number) => void;

  version: string = version;

  // Public methods
  public init: typeof init;
  public getVersion: typeof getVersion;
  public addAlgoliaAgent: typeof addAlgoliaAgent;

  public setUserToken: typeof setUserToken;
  public setAnonymousUserToken: typeof setAnonymousUserToken;
  public getUserToken: typeof getUserToken;
  public onUserTokenChange: typeof onUserTokenChange;

  public sendEvents: ReturnType<typeof makeSendEvents>;

  public clickedObjectIDsAfterSearch: typeof clickedObjectIDsAfterSearch;
  public clickedObjectIDs: typeof clickedObjectIDs;
  public clickedFilters: typeof clickedFilters;

  public convertedObjectIDsAfterSearch: typeof convertedObjectIDsAfterSearch;
  public convertedObjectIDs: typeof convertedObjectIDs;
  public convertedFilters: typeof convertedFilters;

  public viewedObjectIDs: typeof viewedObjectIDs;
  public viewedFilters: typeof viewedFilters;

  constructor({ requestFn }: { requestFn: RequestFnType }) {
    this.sendEvents = makeSendEvents(requestFn).bind(this);

    this.init = init.bind(this);

    this.addAlgoliaAgent = addAlgoliaAgent.bind(this);

    this.setUserToken = setUserToken.bind(this);
    this.setAnonymousUserToken = setAnonymousUserToken.bind(this);
    this.getUserToken = getUserToken.bind(this);
    this.onUserTokenChange = onUserTokenChange.bind(this);

    this.clickedObjectIDsAfterSearch = clickedObjectIDsAfterSearch.bind(this);
    this.clickedObjectIDs = clickedObjectIDs.bind(this);
    this.clickedFilters = clickedFilters.bind(this);

    this.convertedObjectIDsAfterSearch =
      convertedObjectIDsAfterSearch.bind(this);
    this.convertedObjectIDs = convertedObjectIDs.bind(this);
    this.convertedFilters = convertedFilters.bind(this);

    this.viewedObjectIDs = viewedObjectIDs.bind(this);
    this.viewedFilters = viewedFilters.bind(this);

    this.getVersion = getVersion.bind(this);
  }
}

export default AlgoliaAnalytics;
