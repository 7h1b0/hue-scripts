const fetch = require('./fetch');

function toArray(jsonObject) {
  return Object.keys(jsonObject).map((id) => ({ ...jsonObject[id], id }));
}

/**
 * Shutdown all lights
 */
async function off() {
  try {
    await fetch('/groups/0/action', {
      method: 'PUT',
      body: JSON.stringify({ on: false }),
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  toArray,
  off,
};
