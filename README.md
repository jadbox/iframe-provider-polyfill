# 3Frame [aka iframe-provider-polyfill]

[![Build Status](https://travis-ci.org/jadbox/iframe-provider-polyfill.svg?branch=master)](https://travis-ci.org/jadbox/iframe-provider-polyfill)
[![MinZipped size](https://badgen.net/bundlephobia/minzip/@jadbox/iframe-provider-polyfill)](https://bundlephobia.com/result?p=@jadbox/iframe-provider-polyfill@0.1.4)
![NPM Version](https://img.shields.io/npm/v/@jadbox/iframe-provider-polyfill.svg)

This is a drop in script that overrides web3 to point at the parent window when the page is embedded in an iframe.
This makes the dapp instantly compatible with Abridged Web Wallet and EthVault if it works with MetaMask.

## Browsers only

This polyfill is meant for browser contexts only. 
The import is no-op in node contexts.

## Usage

Install the dependency

```bash
npm i @jadbox/iframe-provider-polyfill
```

or with yarn:

```bash
yarn add @jadbox/iframe-provider-polyfill
```

Then import it into your `index.js`

```typescript
import '@jadbox/iframe-provider-polyfill';
```

Or use a CDN like [unpkg](https://unpkg.com). 
Use [subresource integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity),
to prevent security vulnerabilities.

(v0.1.5)
```html
<script src="https://unpkg.com/@jadbox/iframe-provider-polyfill@0.1.5/dist/index.js" integrity="sha384-qx1eG3ocmrXxXBwEL+qnP7je980Depwy/J7keRHVnqfEFVXHJ0ruzYIsUX767NEH" crossorigin="anonymous"></script>
```
