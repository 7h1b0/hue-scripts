import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { lilconfigSync } from 'lilconfig';

function getConfig() {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const rootDir = path.join(dirname, '..');

  const result = lilconfigSync('hue').search(rootDir);

  if (result) {
    return result.config;
  }
  throw new Error('Config file not found');
}

const hasError = (response) =>
  Array.isArray(response)
    ? Object.prototype.hasOwnProperty.call(response[0], 'error')
    : Object.prototype.hasOwnProperty.call(response, 'error');

export function request(url, payload) {
  const { ip, token } = getConfig();
  return fetch(`http://${ip}/api/${token}${url}`, payload)
    .then((res) => {
      if (res.ok) {
        return res;
      }
      throw new Error(res.statusText);
    })
    .then((res) => res.text())
    .then((text) => {
      if (text) {
        return JSON.parse(text);
      }
      return {};
    })
    .then((res) => {
      if (hasError(res)) {
        console.log(JSON.stringify(res));
        throw new Error('An error happen');
      }
      return res;
    });
}
