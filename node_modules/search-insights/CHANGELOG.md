# [2.7.0](https://github.com/algolia/search-insights.js/compare/v2.6.0...v2.7.0) (2023-07-11)


### Features

* **request:** enable requests to be awaited upon ([#483](https://github.com/algolia/search-insights.js/issues/483)) ([e69f7c9](https://github.com/algolia/search-insights.js/commit/e69f7c9c1f1180e556489d1e58947cfa6daab7b5))



# [2.6.0](https://github.com/algolia/search-insights.js/compare/v2.5.0...v2.6.0) (2023-04-20)


### Bug Fixes

* **readme:** update code snippet to reflect version ([#445](https://github.com/algolia/search-insights.js/issues/445)) ([edd2b3a](https://github.com/algolia/search-insights.js/commit/edd2b3a5f388201c0acee06a85f8f316f5ef7416))


### Features

* **userToken:** generate in-memory anonymous user tokens by default ([#441](https://github.com/algolia/search-insights.js/issues/441)) ([161c933](https://github.com/algolia/search-insights.js/commit/161c933253a4a1cb88d61fe9d907cb93005db2e4))



# [2.5.0](https://github.com/algolia/search-insights.js/compare/v2.4.0...v2.5.0) (2023-04-19)


### Features

* add host option ([#442](https://github.com/algolia/search-insights.js/issues/442)) ([68233bc](https://github.com/algolia/search-insights.js/commit/68233bc2ee505c30eb40d96fb3ab33c1701090bb))



# [2.4.0](https://github.com/algolia/search-insights.js/compare/v2.3.0...v2.4.0) (2023-03-16)


### Features

* make `init` optional ([#415](https://github.com/algolia/search-insights.js/issues/415)) ([c774652](https://github.com/algolia/search-insights.js/commit/c774652e1a0d47583c74ec4505d0083907ee4fff))
* expose version string from functional interface ([#413](https://github.com/algolia/search-insights.js/issues/413)) ([8a3f8f9](https://github.com/algolia/search-insights.js/commit/8a3f8f98165c19c9e700f559a9d144a12ccc0e00))
* allow to `init` again while preserving passed options ([#401](https://github.com/algolia/search-insights.js/issues/401)) ([0e66c34](https://github.com/algolia/search-insights.js/commit/0e66c3438fc442bbff22120231b038d451085447))
* pass custom credentials as additional arguments of insights methods ([#399](https://github.com/algolia/search-insights.js/issues/399)) ([3f66ff4](https://github.com/algolia/search-insights.js/commit/3f66ff47d0c529d390cb77444e0c24de52b043f2))



# [2.3.0](https://github.com/algolia/search-insights.js/compare/v2.2.3...v2.3.0) (2023-02-16)


### Features

* **api:** expose window.AlgoliaAnalyticsObject if not yet set ([#390](https://github.com/algolia/search-insights.js/issues/390)) ([493eefd](https://github.com/algolia/search-insights.js/commit/493eefdb843629039e92e94fb14a67dd83b61bcc))



## [2.2.3](https://github.com/algolia/search-insights.js/compare/v2.2.1...v2.2.3) (2022-11-16)


### Bug Fixes

* add default `Content-Type` and `Content-Length` headers to `XMLHttpRequest` instance ([1249920](https://github.com/algolia/search-insights.js/commit/1249920aabe8053415d5bac44c66cf3debf55634))
* check headers setup in tests ([39a29a6](https://github.com/algolia/search-insights.js/commit/39a29a6d6db6b3febb2c4067c4fe913ed13d9463))



## [2.2.2](https://github.com/algolia/search-insights.js/compare/v2.2.1...v2.2.2) (2022-11-16)


### Bug Fixes

* add default `Content-Type` and `Content-Length` headers to `XMLHttpRequest` instance ([1249920](https://github.com/algolia/search-insights.js/commit/1249920aabe8053415d5bac44c66cf3debf55634))
* check headers setup in tests ([39a29a6](https://github.com/algolia/search-insights.js/commit/39a29a6d6db6b3febb2c4067c4fe913ed13d9463))



## [2.2.1](https://github.com/algolia/search-insights.js/compare/v2.2.0...v2.2.1) (2021-12-14)


### Bug Fixes

* encodeURIComponent filters ([#342](https://github.com/algolia/search-insights.js/issues/342)) ([d4012a7](https://github.com/algolia/search-insights.js/commit/d4012a7dc8baad93ac9f0489dbae88a9d752d961))


# [2.2.0](https://github.com/algolia/search-insights.js/compare/v2.1.0...v2.2.0) (2021-12-07)


### Bug Fixes

* fall back to XHR if sendBeacon returns false ([#336](https://github.com/algolia/search-insights.js/issues/336)) ([809fe47](https://github.com/algolia/search-insights.js/commit/809fe47c3b03cdc4cab9fcfd259410aefbaaf480))


### Features

* support multiple events ([#335](https://github.com/algolia/search-insights.js/issues/335)) ([79a1de4](https://github.com/algolia/search-insights.js/commit/79a1de478c3f712ed3d2a8270debefb20459fd8b))



# [2.1.0](https://github.com/algolia/search-insights.js/compare/v2.0.5...v2.1.0) (2021-10-26)


### Features

* export AlgoliaAnalytics, getFunctionalInterface and processQueue ([#333](https://github.com/algolia/search-insights.js/issues/333)) ([a95520b](https://github.com/algolia/search-insights.js/commit/a95520b7a17c07aa05ae735ac2c1d3c05a12b110))



## [2.0.5](https://github.com/algolia/search-insights.js/compare/v2.0.4...v2.0.5) (2021-10-18)


### Bug Fixes

* **types:** make callback optional at onUserTokenChange ([#331](https://github.com/algolia/search-insights.js/issues/331)) ([36c980e](https://github.com/algolia/search-insights.js/commit/36c980e529b029ab1214f428f1d79d8f447617d9))



## [2.0.4](https://github.com/algolia/search-insights.js/compare/v2.0.3...v2.0.4) (2021-10-13)


### Bug Fixes

* remove initSearch method (no longer in use) ([#327](https://github.com/algolia/search-insights.js/issues/327)) ([b4b4e9e](https://github.com/algolia/search-insights.js/commit/b4b4e9ee847a245f16293d89a697aca2b97878e4))
* remove validation before sending events ([#325](https://github.com/algolia/search-insights.js/issues/325)) ([2b7f1a6](https://github.com/algolia/search-insights.js/commit/2b7f1a6e1a2e615199050d5482da776f464528a2))



## [2.0.3](https://github.com/algolia/search-insights.js/compare/v2.0.2...v2.0.3) (2021-09-07)


### Bug Fixes

* **bundle:** remove unnecessary exports from bundles ([#320](https://github.com/algolia/search-insights.js/issues/320)) ([92ee346](https://github.com/algolia/search-insights.js/commit/92ee3464c7ebc746783c9597939a3f5e4735af22))



## [2.0.2](https://github.com/algolia/search-insights.js/compare/v2.0.1...v2.0.2) (2021-07-27)


### Bug Fixes

* provide iife build to prevent conflicts with AMD ([#274](https://github.com/algolia/search-insights.js/issues/274)) ([5e8f3ba](https://github.com/algolia/search-insights.js/commit/5e8f3ba8c726a4a8d3fe2fb789ebc199328fb057))
* **types:** make eventName required ([#275](https://github.com/algolia/search-insights.js/issues/275)) ([04ad058](https://github.com/algolia/search-insights.js/commit/04ad0583f6d319a4ccd47331695fc7b366f8d773))



## [2.0.1](https://github.com/algolia/search-insights.js/compare/v2.0.0...v2.0.1) (2021-07-05)


### Bug Fixes

* **types:** provide better error messages for insights client ([#269](https://github.com/algolia/search-insights.js/issues/269)) ([8b678e8](https://github.com/algolia/search-insights.js/commit/8b678e802c317d2eeeda70c94db5a4baae539233))



# [2.0.0](https://github.com/algolia/search-insights.js/compare/v1.8.0...v2.0.0) (2021-04-28)


### BREAKING CHANGES

* **useCookie:** It used to be `true`, but to be GDPR compliant, we're changing it to `false` by default.


### Bug Fixes

* **cookie:** make useCookie false by default ([#249](https://github.com/algolia/search-insights.js/issues/249)) ([8106034](https://github.com/algolia/search-insights.js/commit/8106034e6450c1653f9919dbe2ad8db4f3d5a14f))
* **_get:** remove the internal method `_get` ([#256](https://github.com/algolia/search-insights.js/issues/256)) ([374f9fb](https://github.com/algolia/search-insights.js/commit/374f9fbbd7fe81149757010929fb71efcfc995b5))



# [1.8.0](https://github.com/algolia/search-insights.js/compare/v1.7.2...v1.8.0) (2021-04-28)


### Bug Fixes

* **types:** expose the types of public methods ([#259](https://github.com/algolia/search-insights.js/issues/259)) ([d59afaa](https://github.com/algolia/search-insights.js/commit/d59afaa24ed88d28bad7ae936becb5038d12765b))


### Features

* add getVersion method ([#260](https://github.com/algolia/search-insights.js/issues/260)) ([c15a47c](https://github.com/algolia/search-insights.js/commit/c15a47c2d79f47ff3abd1beac3bdddd5822c0c8d))



## [1.7.2](https://github.com/algolia/search-insights.js/compare/v1.7.1...v1.7.2) (2021-04-26)


### Bug Fixes

* **types:** export default ([#257](https://github.com/algolia/search-insights.js/issues/257)) ([55dd748](https://github.com/algolia/search-insights.js/commit/55dd748af67bf83c7f13d3e4bb4f195394df3f33))
* **types:** export default in the type definition ([#247](https://github.com/algolia/search-insights.js/issues/247)) ([10044fc](https://github.com/algolia/search-insights.js/commit/10044fc0f7a9807e43d41e5333632f657d24f3ed))
* **userToken:** prevent anonymous user token from overriding existing token ([#251](https://github.com/algolia/search-insights.js/issues/251)) ([738e5d9](https://github.com/algolia/search-insights.js/commit/738e5d9e2a9c416104949ca3509b65e7cb790079))



## [1.7.1](https://github.com/algolia/search-insights.js/compare/v1.7.0...v1.7.1) (2021-01-25)


### Bug Fixes

* **types:** emit and publish type definitions to npm ([#243](https://github.com/algolia/search-insights.js/issues/243)) ([074f037](https://github.com/algolia/search-insights.js/commit/074f0371d0da9227c6d8b1cbc98077d6ee22b551))



# [1.7.0](https://github.com/algolia/search-insights.js/compare/v1.6.3...v1.7.0) (2021-01-13)


### Bug Fixes

* use browser requester on browser with bundler ([#238](https://github.com/algolia/search-insights.js/issues/238)) ([df62ffd](https://github.com/algolia/search-insights.js/commit/df62ffd31f2efd7437d8da4e8f53b4efc796a08c))
* warn about unknown function name ([#237](https://github.com/algolia/search-insights.js/issues/237)) ([dd46015](https://github.com/algolia/search-insights.js/commit/dd46015fc1a28c86a39c58042a294855ce912c1d))


### Features

* **init(userToken):** accept new parameter `userToken` at init() method ([#241](https://github.com/algolia/search-insights.js/issues/241)) ([29216c6](https://github.com/algolia/search-insights.js/commit/29216c60ce7a7310071ba9250b9227ae2a7f1d2c))
* **init(useCookie):** accept new parameter `useCookie` which skips anonymous userToken when `false` is given ([#236](https://github.com/algolia/search-insights.js/issues/236)) ([db09c7e](https://github.com/algolia/search-insights.js/commit/db09c7ee4065c67b9c58226516f53231da2fad79))



## [1.6.3](https://github.com/algolia/search-insights.js/compare/v1.6.2...v1.6.3) (2020-11-02)


### Bug Fixes

* do not store anonymous token in cookie when user has opted out ([#233](https://github.com/algolia/search-insights.js/issues/233)) ([8669b67](https://github.com/algolia/search-insights.js/commit/8669b675338f0f76f12be1af57484bfd07e57cbe))



## [1.6.2](https://github.com/algolia/search-insights.js/compare/v1.6.1...v1.6.2) (2020-09-02)


### Bug Fixes

* **commonJS:** fix mixed exports issue ([#224](https://github.com/algolia/search-insights.js/issues/224)) ([24b97e3](https://github.com/algolia/search-insights.js/commit/24b97e304e6bb71054e47fe79a5357af24cf3f4b))



## [1.6.1](https://github.com/algolia/search-insights.js/compare/v1.6.0...v1.6.1) (2020-08-28)


### Bug Fixes

* **package:** include empty module ([c4cf25d](https://github.com/algolia/search-insights.js/commit/c4cf25df23936edeca68876e4a93cdd9c97444df))



# [1.6.0](https://github.com/algolia/search-insights.js/compare/v1.5.0...v1.6.0) (2020-08-13)


### Features

* **react-native:** shim native node modules ([#220](https://github.com/algolia/search-insights.js/issues/220)) ([713cbf9](https://github.com/algolia/search-insights.js/commit/713cbf9b2937713fd9ff2d4b5501c0a1e94dd4ae))



# [1.5.0](https://github.com/algolia/search-insights.js/compare/v1.4.0...v1.5.0) (2020-07-23)


### Features

* **browser:** expose createInsightsClient ([#213](https://github.com/algolia/search-insights.js/issues/213)) ([7880205](https://github.com/algolia/search-insights.js/commit/788020598064bc5f9c71ba0b1cf5a20109195fb8))
* **get:** add `_get` function to get instance variables ([#216](https://github.com/algolia/search-insights.js/issues/216)) ([3173c9b](https://github.com/algolia/search-insights.js/commit/3173c9bcefb15c9c9b166636dabef6945e555f6f))
* add `onUserTokenChange` to know when token is assigned ([#209](https://github.com/algolia/search-insights.js/issues/209)) ([1e5bd42](https://github.com/algolia/search-insights.js/commit/1e5bd42f48530106f62855bba22a0a4b612bce8d))
* export `createInsightsClient` for node env ([#203](https://github.com/algolia/search-insights.js/issues/203)) ([4f04869](https://github.com/algolia/search-insights.js/commit/4f048697a44763c23a03c311bfe6d7a9f5367641)), closes [#204](https://github.com/algolia/search-insights.js/issues/204) [#204](https://github.com/algolia/search-insights.js/issues/204)



# [1.4.0](https://github.com/algolia/search-insights.js/compare/v1.3.1...v1.4.0) (2020-02-17)


### Bug Fixes

* **gtm:** add Algolia Agent after `init` ([9640dc2](https://github.com/algolia/search-insights.js/commit/9640dc2677c931cdfd1e278834c54fe169381ba6))
* **gtm:** forward `eventName` to all events ([1209301](https://github.com/algolia/search-insights.js/commit/12093016e424e0a0fce3fe803cc5388d5a905219))
* **types:** remove optional types on main methods ([#192](https://github.com/algolia/search-insights.js/issues/192)) ([e551d10](https://github.com/algolia/search-insights.js/commit/e551d106464edbcc5304047d398a7b0df48c0823))


### Features

* **sendEvent:** return the value of the request function ([#200](https://github.com/algolia/search-insights.js/issues/200)) ([56b4ffd](https://github.com/algolia/search-insights.js/commit/56b4ffd0e878a02767f9553ef9dce26bf6dc6d26)), closes [#199](https://github.com/algolia/search-insights.js/issues/199)



# [1.3.0](https://github.com/algolia/search-insights.js/compare/v1.2.0...v1.3.0) (2019-09-18)


### Bug Fixes

* **IE11:** remove startWith and use indexOf instead ([#129](https://github.com/algolia/search-insights.js/issues/129)) ([9c79e20](https://github.com/algolia/search-insights.js/commit/9c79e20))
* **bug:** persist function reference after library is loaded ([#128](https://github.com/algolia/search-insights.js/issues/128)) ([662bf64](https://github.com/algolia/search-insights.js/commit/662bf64))
* **compat:** node compatibility ([#140](https://github.com/algolia/search-insights.js/issues/140)) ([e804bd1](https://github.com/algolia/search-insights.js/commit/e804bd1)), closes [#141](https://github.com/algolia/search-insights.js/issues/141) [#143](https://github.com/algolia/search-insights.js/issues/143) [#144](https://github.com/algolia/search-insights.js/issues/144) [#142](https://github.com/algolia/search-insights.js/issues/142)
* **processQueue:** move callback on method level ([#115](https://github.com/algolia/search-insights.js/issues/115)) ([1ff8191](https://github.com/algolia/search-insights.js/commit/1ff8191))



# [1.2.0](https://github.com/algolia/search-insights.js/compare/v1.1.1...v1.2.0) (2019-04-24)


### Features

* **getUserToken:** add a way to get user token ([#107](https://github.com/algolia/search-insights.js/issues/107)) ([29786e1](https://github.com/algolia/search-insights.js/commit/29786e1))



## [1.1.1](https://github.com/algolia/search-insights.js/compare/v1.1.0...v1.1.1) (2019-04-11)


### Bug Fixes

* **UserAgent:** change shape of user agent to reflect other flavours ([#109](https://github.com/algolia/search-insights.js/issues/109)) ([cc1babf](https://github.com/algolia/search-insights.js/commit/cc1babf))



# [1.1.0](https://github.com/algolia/search-insights.js/compare/v1.0.1...v1.1.0) (2019-04-11)



### Features

* **UserAgent:** add user agent string ([#100](https://github.com/algolia/search-insights.js/issues/100)) ([09141a1](https://github.com/algolia/search-insights.js/commit/09141a1))
* **UserAgent:** introduce addAlgoliaAgent method ([#105](https://github.com/algolia/search-insights.js/issues/105)) ([927e74e](https://github.com/algolia/search-insights.js/commit/927e74e))
* **version:** expose version in main class ([#99](https://github.com/algolia/search-insights.js/issues/99)) ([12bd554](https://github.com/algolia/search-insights.js/commit/12bd554))



## [1.0.1](https://github.com/algolia/search-insights.js/compare/v1.0.0...v1.0.1) (2019-01-17)


### Features

* **doc:** add migration section ([282aa0e](https://github.com/algolia/search-insights.js/commit/282aa0e))



# [1.0.0](https://github.com/algolia/search-insights.js/compare/v0.0.17...v1.0.0) (2018-12-17)


### Bug Fixes

* **examples:** update payloads ([#65](https://github.com/algolia/search-insights.js/issues/65)) ([825f524](https://github.com/algolia/search-insights.js/commit/825f524))
* **timestamp:** make timestamp optional ([#50](https://github.com/algolia/search-insights.js/issues/50)) ([b44d29d](https://github.com/algolia/search-insights.js/commit/b44d29d)), closes [#46](https://github.com/algolia/search-insights.js/issues/46) [#32](https://github.com/algolia/search-insights.js/issues/32)
* **types:** add InsightEventType 'view' ([31c4564](https://github.com/algolia/search-insights.js/commit/31c4564))


### Features

* **cookieDuration:** add cookieDuration support ([#61](https://github.com/algolia/search-insights.js/issues/61)) ([66a4a69](https://github.com/algolia/search-insights.js/commit/66a4a69))
* **userToken:** accepting provided userToken ([#64](https://github.com/algolia/search-insights.js/issues/64)) ([f7d63ee](https://github.com/algolia/search-insights.js/commit/f7d63ee))
