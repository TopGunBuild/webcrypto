import { test, expectTypeOf } from 'vitest';
import WebCrypto from '../src/node';

test('simple', () => {
    expectTypeOf(WebCrypto).toBeObject();
});
