# Search Insights

[![Build Status](https://circleci.com/gh/algolia/search-insights.js.svg?style=shield)](https://github.com/algolia/search-insights.js)
[![npm version](https://badge.fury.io/js/search-insights.svg)](https://badge.fury.io/js/search-insights)

Search Insights lets you report click, conversion and view metrics using the [Algolia Insights API](https://www.algolia.com/doc/rest-api/insights/#overview).

## Table of Contents

<!-- toc -->

- [Getting started](#getting-started)
  - [Browser](#browser)
  - [Node.js](#nodejs)
- [Use cases](#use-cases)
  - [Search (Click Analytics and A/B testing)](#search-click-analytics-and-ab-testing)
  - [Personalization](#personalization)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

<!-- tocstop -->

## Cookie usage

You're looking at the documentation of `search-insights` v2, which is the new major version. (_Click [here](https://github.com/algolia/search-insights.js/blob/v1/README.md) for v1.x documentation._)

v2 introduces a breaking change which is `useCookie` being `false` by default. If it's `false`, `search-insights` doesn't generate anonymous userToken. It means no event will be sent until `setUserToken` is explicitly called.

## Payload validation

Since v2.0.4, search-insights no longer validates event payloads.
You can visit https://algolia.com/events/debugger instead.

## Getting started

> Are you using Google Tag Manager in your app? We provide a [custom template](https://github.com/algolia/search-insights-gtm) to ease the integration.

### Browser

#### 1. Load the library

The Search Insights library can be either loaded via [jsDelivr CDN](https://www.jsdelivr.com/) or directly bundled with your application.
We recommend loading the library by adding the snippet below to all pages where you wish to track search analytics.

<!-- prettier-ignore-start -->
```html
<script>
var ALGOLIA_INSIGHTS_SRC = "https://cdn.jsdelivr.net/npm/search-insights@2.7.0";

!function(e,a,t,n,s,i,c){e.AlgoliaAnalyticsObject=s,e[s]=e[s]||function(){
(e[s].queue=e[s].queue||[]).push(arguments)},e[s].version=(n.match(/@([^\/]+)\/?/) || [])[1],i=a.createElement(t),c=a.getElementsByTagName(t)[0],
i.async=1,i.src=n,c.parentNode.insertBefore(i,c)
}(window,document,"script",ALGOLIA_INSIGHTS_SRC,"aa");
</script>
```
<!-- prettier-ignore-end -->

#### 2. Initialize the library

Initializing the library is optional, as you can specify the [credentials for each event](#sending-events-to-multiple-algolia-applications) when sending them. This gives you the flexibility to manage your Algolia credentials on a per-event basis, without having to configure them upfront.

```js
// Optional: configure default Algolia credentials for events
aa('init', {
  appId: 'APP_ID',
  apiKey: 'SEARCH_API_KEY',
});

// Optional: set the analytics user ID
aa('setUserToken', 'USER_ID');
```

| Option            | Type           | Default                  | Description                                     |
| ----------------- | -------------- | ------------------------ | ----------------------------------------------- |
| `appId`           | `string`       | None                     | The identifier of your Algolia application.     |
| `apiKey`          | `string`       | None                     | The search API key of your Algolia application. |
| `userHasOptedOut` | `boolean`      | `false`                  | Whether to exclude users from analytics.        |
| `region`          | `'de' \| 'us'` | Automatic                | The DNS server to target.                       |
| `host`            | `string`       | None                     | The URL to route requests through before they're forwarded to Algolia. |
| `useCookie`       | `boolean`      | `false`                  | Whether to use cookie in browser environment. The anonymous user token will not be set if `false`. When `useCookie` is `false` and `setUserToken` is not called yet, sending events will throw errors because there is no user token to attach to the events. |
| `cookieDuration`  | `number`       | `15552000000` (6 months) | The cookie duration in milliseconds.            |
| `userToken`       | `string`       | `undefined` (optional)   | Initial userToken. When given, anonymous userToken will not be set. |
| `partial`         | `boolean`      | `false`                  | Whether to preserve previously passed options without redeclaring them. |

To update the client with new options, you can call `init` again.

By default, all previously passed options that you don't redefine are reset to their default setting, except for the `userToken`. To preserve previously passed options without redeclaring them, use the `partial` option.

```js
aa("init", {
  appId: "APP_ID",
  apiKey: "SEARCH_API_KEY",
  region: "de",
});

aa("init", {
  appId: "APP_ID",
  apiKey: "SEARCH_API_KEY",
  partial: true,
}); // `region` is still `"de"`
```

##### Note for Require.js users

When using [Require.js](https://requirejs.org/), the default UMD build might conflict and throw with a "Mismatched anonymous define() modules" message. This is a [known Require.js issue](https://requirejs.org/docs/errors.html#mismatch).

To work around this problem and ensure you capture all interactions occurring before the library is done loading, change `ALGOLIA_INSIGHTS_SRC` to point to the IIFE build, and load it via a `<script>` tag.

<!-- prettier-ignore-start -->
```html
<script>
var ALGOLIA_INSIGHTS_SRC = "https://cdn.jsdelivr.net/npm/search-insights@2.7.0/dist/search-insights.iife.min.js";

!function(e,a,t,n,s,i,c){e.AlgoliaAnalyticsObject=s,e[s]=e[s]||function(){
(e[s].queue=e[s].queue||[]).push(arguments)},e[s].version=(n.match(/@([^\/]+)\/?/) || [])[1],i=a.createElement(t),c=a.getElementsByTagName(t)[0],
i.async=1,i.src=n,c.parentNode.insertBefore(i,c)
}(window,document,"script",ALGOLIA_INSIGHTS_SRC,"aa");
</script>
```
<!-- prettier-ignore-end -->

### Node.js

_(Node.js `>= 8.16.0` required)_

#### 1. Install the library

Insights library can be used on the backend as a Node.js module.

```bash
npm install search-insights
# or
yarn add search-insights
```

#### 2. Initialize the library

Initializing the library is optional, as you can specify the [credentials for each event](#sending-events-to-multiple-algolia-applications) when sending them. This gives you the flexibility to manage your Algolia credentials on a per-event basis, without having to configure them upfront.

```js
const aa = require('search-insights');

// Optional: configure default Algolia credentials for events
aa('init', {
  appId: 'APPLICATION_ID',
  apiKey: 'SEARCH_API_KEY'
});
```

#### Add `userToken`

On the Node.js environment, unlike the browser environment, `userToken` must be specified when sending any event.

```js
aa('clickedObjectIDs', {
  userToken: 'USER_ID',
  // ...
});
```

#### Customize the client

If you want to customize the way to send events, you can create a custom Insights client.

```js
// via ESM
import { createInsightsClient } from "search-insights";
// OR in commonJS
const { createInsightsClient } = require("search-insights");
// OR via the UMD
const createInsightsClient = window.AlgoliaAnalytics.createInsightsClient;

function requestFn(url, data) {
  const serializedData = JSON.stringify(data);
  const { protocol, host, path } = require("url").parse(url);
  const options = {
    protocol,
    host,
    path,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": serializedData.length
    }
  };

  const { request: nodeRequest } =
    url.indexOf("https://") === 0 ? require("https") : require("http");
  const req = nodeRequest(options);

  req.on("error", error => {
    console.error(error);
  });

  req.write(serializedData);
  req.end();
};

const aa = createInsightsClient(requestFn);
```

## Use cases

The Search Insights library supports both [Search](https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/out-of-the-box-analytics/) and [Personalization](https://www.algolia.com/doc/guides/getting-insights-and-analytics/personalization/personalization/) Algolia features.

### Search (Click Analytics and A/B testing)

#### Initialize

To enable click analytics, the search parameter [`clickAnalytics`](https://www.algolia.com/doc/api-reference/api-parameters/clickAnalytics/) must be set to `true`. This tells the Algolia engine to return a `queryID` on each search request.

```js
const searchClient = algoliasearch('APPLICATION_ID', 'SEARCH_API_KEY');
const search = instantsearch({
  indexName: 'INDEX_NAME',
  searchClient,
  searchParameters: {
    clickAnalytics: true,
  },
});

function getQueryID() {
  return search.helper.lastResults.queryID;
}
```

#### Report a click event

```js
aa('clickedObjectIDsAfterSearch', {
  index: 'INDEX_NAME',
  eventName: 'Click item',
  queryID: getQueryID(),
  objectIDs: ['object1'],
  positions: [42],
});
```

| Option      | Type       | Description                                                                                         |
| ----------- | ---------- | --------------------------------------------------------------------------------------------------- |
| `index`     | `string`   | The name of the index related to the event                                                          |
| `eventName` | `string`   | The name of the event                                                                               |
| `objectIDs` | `string[]` | The list of IDs of the result that was clicked                                                      |
| `positions` | `number[]` | The list of the absolute positions of the HTML element that was clicked (1-based and _not_ 0-based) |
| `queryID`   | `string`   | The `queryID` of the search sent from Algolia                                                       |

#### Report a conversion event

```js
aa('convertedObjectIDsAfterSearch', {
  index: 'INDEX_NAME',
  eventName: 'Add to basket',
  queryID: getQueryID(),
  objectIDs: ['object1'],
});
```

| Option      | Type       | Description                                    |
| ----------- | ---------- | ---------------------------------------------- |
| `index`     | `string`   | The name of the index related to the event     |
| `eventName` | `string`   | The name of the event                          |
| `objectIDs` | `string[]` | The list of IDs of the result that was clicked |
| `queryID`   | `string`   | The `queryID` of the search sent from Algolia  |

### Personalization

#### Initialize

To enable personalization, the search parameter [`enablePersonalization`](https://www.algolia.com/doc/api-reference/api-parameters/enablePersonalization/) must be set to `true`.

```js
const searchClient = algoliasearch('APPLICATION_ID', 'SEARCH_API_KEY');
const search = instantsearch({
  indexName: 'INDEX_NAME',
  searchClient,
  searchParameters: {
    enablePersonalization: true,
  },
});
```

#### Access `userToken`

In cases where the `userToken` is generated, you need a way to access the `userToken` so that you can pass it to the `searchClient`.

```js
const searchClient = algoliasearch('APPLICATION_ID', 'SEARCH_API_KEY');

aa('getUserToken', null, (err, userToken) => {
  // for algoliasearch v3.x
  searchClient.setExtraHeader('X-Algolia-UserToken', userToken);

  // for algoliasearch v4.x
  searchClient.transporter.headers['X-Algolia-UserToken'] = userToken;
});
```

#### Listen to `userToken` change

If you want to attach a listener for `userToken` change, you can call `onUserTokenChange`.

```js
aa('onUserTokenChange', (userToken) => {
  console.log("userToken has changed: ", userToken);
});
```

`onUserTokenChange` accepts `callback`(required) and `options`(optional).

```js
aa('onUserTokenChange', callback, options);
```

| Option      | Type       | Description                                    |
| ----------- | ---------- | ---------------------------------------------- |
| `immediate` | `boolean`  | Fire the callback as soon as it's attached     |

```js
aa('init', { ..., useCookie: true });  // ← This sets an anonymous user token if cookie is available.

aa('onUserTokenChange', (userToken) => {
  console.log(userToken);  // prints out the anonymous user token
}, { immediate: true });
```

```js
aa('init', { ... });
aa('setUserToken', 'my-user-id-1');

aa('onUserTokenChange', (userToken) => {
  console.log(userToken); // prints out 'my-user-id-1'
}, { immediate: true })
```

With `immediate: true`, `onUserTokenChange` will be immediately fired with the token which is set beforehand.

#### Report a click event

```js
aa('clickedObjectIDs', {
  index: 'INDEX_NAME',
  eventName: 'Add to basket',
  objectIDs: ['object1'],
});
```

| Option      | Type       | Description                                    |
| ----------- | ---------- | ---------------------------------------------- |
| `index`     | `string`   | The name of the index related to the event     |
| `eventName` | `string`   | The name of the event                          |
| `objectIDs` | `string[]` | The list of IDs of the result that was clicked |

```js
aa('clickedFilters', {
  index: 'INDEX_NAME',
  eventName: 'Filter on facet',
  filters: ['brand:Apple'],
});
```

| Option      | Type       | Description                                                      |
| ----------- | ---------- | ---------------------------------------------------------------- |
| `index`     | `string`   | The name of the index related to the event                       |
| `eventName` | `string`   | The name of the event                                            |
| `filters`   | `string[]` | The list of filters that was clicked as `'${attr}${op}${value}'` |

#### Report a conversion event

```js
aa('convertedObjectIDs', {
  index: 'INDEX_NAME',
  eventName: 'Add to basket',
  objectIDs: ['object1'],
});
```

| Option      | Type       | Description                                    |
| ----------- | ---------- | ---------------------------------------------- |
| `index`     | `string`   | The name of the index related to the event     |
| `eventName` | `string`   | The name of the event                          |
| `objectIDs` | `string[]` | The list of IDs of the result that was clicked |

```js
aa('convertedFilters', {
  index: 'INDEX_NAME',
  eventName: 'Filter on facet',
  filters: ['brand:Apple'],
});
```

| Option      | Type       | Description                                                      |
| ----------- | ---------- | ---------------------------------------------------------------- |
| `index`     | `string`   | The name of the index related to the event                       |
| `eventName` | `string`   | The name of the event                                            |
| `filters`   | `string[]` | The list of filters that was clicked as `'${attr}${op}${value}'` |

#### Report a view event

```js
aa('viewedObjectIDs', {
  index: 'INDEX_NAME',
  eventName: 'Add to basket',
  objectIDs: ['object1'],
});
```

| Option      | Type       | Description                                    |
| ----------- | ---------- | ---------------------------------------------- |
| `index`     | `string`   | The name of the index related to the event     |
| `eventName` | `string`   | The name of the event                          |
| `objectIDs` | `string[]` | The list of IDs of the result that was clicked |

```js
aa('viewedFilters', {
  index: 'INDEX_NAME',
  eventName: 'Filter on facet',
  filters: ['brand:Apple'],
});
```

| Option      | Type       | Description                                                      |
| ----------- | ---------- | ---------------------------------------------------------------- |
| `index`     | `string`   | The name of the index related to the event                       |
| `eventName` | `string`   | The name of the event                                            |
| `filters`   | `string[]` | The list of filters that was clicked as `'${attr}${op}${value}'` |

### Batch Events

You can send multiple events in a single HTTP request, by using `sendEvents` method.

```js
aa('sendEvents', [
  {
    eventType,
    eventName,
    userToken,
    ...
  }
]);
```

| Option      | Type                            | Description                                    |
| ----------- | ------------------------------- | ---------------------------------------------- |
| `eventType` | `'view'` \| `'click'` \| `'conversion'` | The name of the index related to the event.    |
| `eventName` | `string`                        | The name of the event.                         |
| `userToken` | `string` (optional)             | search-insights uses anonymous user token or a token set by `setUserToken` method. You can override it by providing a `userToken` per event object. |

### Sending events to multiple Algolia applications

The Search Insights library sends all events to the Algolia application it has been initialized with, by default. In some cases, you might have data coming from more than one Algolia application which all need events.

You can use a single instance of the Search Insights library while still customizing the Algolia credentials on a per-event basis. All click, view and conversion methods support an additional argument where you can specify credentials that will override those set during initialization (which is optional).

```js
aa('clickedObjectIDsAfterSearch', {
  index: 'INDEX_NAME',
  eventName: 'Click item',
  queryID: getQueryID(),
  objectIDs: ['object1'],
  positions: [42],
}, {
  headers: {
    'X-Algolia-Application-Id': 'OTHER_APP_ID',
    'X-Algolia-API-Key': 'OTHER_SEARCH_API_KEY'
  }
});
```

This also works with event batching, using `sendEvents`:

```js
aa('sendEvents', [
  {
    eventType,
    eventName,
    userToken,
    ...
  }
], {
  headers: {
    'X-Algolia-Application-Id': 'OTHER_APP_ID',
    'X-Algolia-API-Key': 'OTHER_SEARCH_API_KEY'
  }
});
```

| Option    | Type                     | Description                                                  |
| --------- | ------------------------ | ------------------------------------------------------------ |
| `headers` | `Record<string, string>` | A dictionary of headers that will override those set by default. You can check out a list of headers for authentication in the [Algolia API reference](https://www.algolia.com/doc/rest-api/insights/#authentication). |

## Examples

The following examples assume that the Search Insights library is loaded.

- [InstantSearch.js](https://github.com/algolia/search-insights.js/blob/main/examples/INSTANTSEARCH.md)
- [AlgoliaSearch Helper](https://github.com/algolia/search-insights.js/blob/main/examples/HELPER.md)

## Contributing

To run the examples and the code, you need to run two separate commands:

- `yarn dev` runs webpack and the Node.js server
- `yarn build:dev` runs Rollup in watch mode

To release, go on `main` (`git checkout main`) and use:

```sh
yarn run release
```

It will create a pull request for the next release. When it's reviewed, approved and merged, then CircleCI will automatically publish it to npm.

## License

Search Insights is [MIT licensed](LICENSE.md).
