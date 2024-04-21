export const strings = {
  isEmpty(str: string): boolean {
    return str.length === 0;
  },
  isBlank(str: string): boolean {
    return str.trim().length === 0;
  },
  isValid(str: string): boolean {
    return str.trim().length > 0;
  },
  clear(str: string): string {
    return str.trim().replace('  ', ' ');
  },
  split(text: string): string[] {
    return this.clear(text).split(/([ .,:;_\-?!'`]+)/);
  },
  /**
   * @returns {boolean} true: 'a' === 'A', 'a' === 'ä'
   */
  localeCompare(
    str1: string,
    str2: string,
    options?: Intl.CollatorOptions | undefined
  ): boolean {
    const DEFAULT_OPTIONS: Intl.CollatorOptions = { sensitivity: 'base' };
    return str1.localeCompare(str2, 'en', options || DEFAULT_OPTIONS) === 0;
  },
};

/**
 * Converting the base64 string to a Uint8Array and then
 * decoding it to a UTF-8 string.
 * "SGVsbG8sIFdvcmxkIQ==" -> "Hello, World!"
 *
 * @param {string} base64String
 * @returns
 */
export function toUTF8(base64String: string): string {
  const binaryString = atob(base64String);
  const uint8Array = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }
  const utf8Decoded = new TextDecoder().decode(uint8Array);
  return utf8Decoded;
}

/**
 * Converting the UTF-8 string to base64 string.
 * "Hello, World!" -> "SGVsbG8sIFdvcmxkIQ=="
 *
 * @param {string} utf8String
 * @returns
 */
export function toBase64(utf8String: string): string {
  // convert the string to a URI-encoded format to handle special characters correctly.
  const utf8Encoded = encodeURIComponent(utf8String);
  // encode the URI-encoded string to base64
  const base64Encoded = btoa(utf8Encoded);
  return base64Encoded;
}

export function removeHTML(str: string): string {
  return str
    .replace(/&/g, '')
    .replace(/</g, '')
    .replace(/"/g, '')
    .replace(/'/g, '')
    .replace(/`/g, '');
}
