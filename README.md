# topgun-webcrypto [![NPM](https://img.shields.io/npm/v/topgun-webcrypto.svg)](https://npmjs.com/package/topgun-webcrypto) [![bundlephobia](https://img.shields.io/bundlephobia/minzip/topgun-webcrypto.svg)](https://bundlephobia.com/result?p=topgun-webcrypto) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

An isomorphic WebCrypto for Javascript in Node and the browser, used in [TopGun](https://github.com/TopGunBuild/topgun)

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
