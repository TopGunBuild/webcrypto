<h1 align="center" style="border-bottom: none;">🔑 topgun-webcrypto</h1>
<h3 align="center">An isomorphic WebCrypto for Javascript in Node and the browser, used in <a href="https://github.com/TopGunBuild/topgun">TopGun</a></h3>

<p align="center">
  <a href="https://npm.im/topgun-webcrypto">
    <img alt="npm" src="https://badgen.net/npm/v/topgun-webcrypto">
  </a>
  <a href="https://bundlephobia.com/result?p=topgun-webcrypto">
    <img alt="bundlephobia" src="https://img.shields.io/bundlephobia/minzip/topgun-webcrypto.svg">
  </a>
  <a href="https://opensource.org/licenses/MIT">
      <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

## What?

It is an isomorphic WebCrypto object that combines [a great Node polyfill](https://github.com/PeculiarVentures/webcrypto) and [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).

## Install

`npm install topgun-webcrypto`

## Usage

There's a simple hashing example below, but [there are many more WebCrypto examples here](https://github.com/diafygi/webcrypto-examples).

```javascript
const crypto = require('topgun-webcrypto')
// or
import crypto from 'topgun-webcrypto';

crypto.randomUUID (); // => '43e16416-7a2a-4c00-b2e8-1ea7a57adfb9'
```

## License

MIT
