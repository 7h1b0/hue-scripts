const nodeFetch = require('node-fetch');

const HUE_IP = process.env.HUE_IP;
const HUE_TOKEN = process.env.HUE_TOKEN;

const hasError = (response) =>
  Array.isArray(response)
    ? Object.prototype.hasOwnProperty.call(response[0], 'error')
    : Object.prototype.hasOwnProperty.call(response, 'error');

function fetch(url, payload) {
  return nodeFetch(`http://${HUE_IP}/api/${HUE_TOKEN}${url}`, payload)
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
