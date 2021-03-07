const nodeFetch = require('node-fetch');
const { cosmiconfigSync } = require('cosmiconfig');

function getConfig() {
  const explorerSync = cosmiconfigSync('hue');
  const result = explorerSync.search();

  if (result) {
    return result.config;
  }
  throw new Error('Config file not found');
}

const hasError = (response) =>
  Array.isArray(response)
    ? Object.prototype.hasOwnProperty.call(response[0], 'error')
    : Object.prototype.hasOwnProperty.call(response, 'error');

function fetch(url, payload) {
  const { ip, token } = getConfig();
  return nodeFetch(`http://${ip}/api/${token}${url}`, payload)
    .then((res) => {
      if (res.ok) {
        return res;
      }
      throw new Error(res.statusText);
    })
    .then((res) => res.text())
    .then((text) => (text ? JSON.parse(text) : {}))
    .then((res) => {
      if (hasError(res)) {
        throw new Error('An error happen');
      }
      return res;
    });
}

module.exports = fetch;
