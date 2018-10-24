import path from 'path';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export function prefixURL(url) {
  return path.join(publicRuntimeConfig.assetPrefix, url);
}
