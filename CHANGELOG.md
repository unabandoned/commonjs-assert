# assert change log

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org/).

## [2.2.2](https://github.com/unabandoned/commonjs-assert/compare/assert-v2.2.1...assert-v2.2.2) (2026-09-23)


### Dependencies & maintenance

* **deps:** update commitlint monorepo to v21.2.3 ([#14](https://github.com/unabandoned/commonjs-assert/issues/14)) ([c73655b](https://github.com/unabandoned/commonjs-assert/commit/c73655b11a1ccbe706383ffb90587e1e70b506d4))

## [2.2.1](https://github.com/unabandoned/commonjs-assert/compare/assert-v2.2.0...assert-v2.2.1) (2026-09-22)


### Dependencies & maintenance

* **deps:** update babel monorepo to v8 ([#6](https://github.com/unabandoned/commonjs-assert/issues/6)) ([ca23eb7](https://github.com/unabandoned/commonjs-assert/commit/ca23eb773d643a6dffbfbfcf836bd8be6a69a5b4))
* **deps:** update dependency @ljharb/eslint-config to v22 ([#7](https://github.com/unabandoned/commonjs-assert/issues/7)) ([043b659](https://github.com/unabandoned/commonjs-assert/commit/043b659cb19e68767b89ac3a756440ffba7c5817))
* **deps:** update dependency aud to v3 ([#8](https://github.com/unabandoned/commonjs-assert/issues/8)) ([7e799d3](https://github.com/unabandoned/commonjs-assert/commit/7e799d397e60749281fa04956afcb87e934a7ff5))
* migrate to eslint flat config and update eslint to v10 ([#13](https://github.com/unabandoned/commonjs-assert/issues/13)) ([af684b6](https://github.com/unabandoned/commonjs-assert/commit/af684b60a3337a2f096bfb148233043998912380))
* replace aud with npm audit ([#11](https://github.com/unabandoned/commonjs-assert/issues/11)) ([c1dc691](https://github.com/unabandoned/commonjs-assert/commit/c1dc691985aa6d4997f02c409d513382162271df))
* vendor the two remaining abandoned test dependencies ([#12](https://github.com/unabandoned/commonjs-assert/issues/12)) ([8490158](https://github.com/unabandoned/commonjs-assert/commit/84901589a83f1c4c028585224336f207e6e4eebb))

## [2.2.0](https://github.com/unabandoned/commonjs-assert/compare/assert-v2.1.0...assert-v2.2.0) (2026-09-22)


### Features

* onboard as @unabandoned/assert and clear the abandoned dependency tree ([#1](https://github.com/unabandoned/commonjs-assert/issues/1)) ([e988983](https://github.com/unabandoned/commonjs-assert/commit/e988983a6dc97830f74430c42a152c6174a4057c))


### Dependencies & maintenance

* **deps:** pin dependencies ([#3](https://github.com/unabandoned/commonjs-assert/issues/3)) ([144020b](https://github.com/unabandoned/commonjs-assert/commit/144020b7c8ee4fcda6db6c4fb8fa3d02087f1a15))

## 2.1.0

* [New] Implement `assert.match()` and `assert.doesNotMatch()`
* [Refactor] switching to a maintained Object.assign package
* [readme] Add description for usage with webpack and vite (#60)
* [readme] Remove duplicate line under usage section (#48)
* [Deps] update `is-nan`, `object-is`, `util`
* [Dev Deps] update `@babel/cli`, `@babel/core`, `@babel/preset-env`, `airtap`, `core-js`, `cross-eng`, `object.entries`, `object.getownpropertydescriptors`, `tape`

## 2.0.0

* Sync with Node.js master. ([@lukechilds](https://github.com/lukechilds) in [#44](https://github.com/browserify/commonjs-assert/pull/44))

**Note:** Support for IE9 and IE10 has been dropped. IE11 is still supported.

## 1.5.1
* [Deps] switch to `object.assign`, and unpin `util`

## 1.5.0
* Add strict mode APIs. ([@lukechilds](https://github.com/lukechilds) in [#41](https://github.com/browserify/commonjs-assert/pull/41))
