import { base } from './base';
import { BASE62_ALPHABET } from './base62-alphabet.const';

const { encode : encodeBase, decode: decodeBase} = base(BASE62_ALPHABET);
const ENCODING = 'hex' satisfies BufferEncoding;

export function encode(value: string): string {
  const buffer = Buffer.from(value, ENCODING);

  return encodeBase(buffer);
}

export function decode(encoded: string): string {
  const uint8Array = decodeBase(encoded);

  return Buffer.from(uint8Array).toString(ENCODING);
}
