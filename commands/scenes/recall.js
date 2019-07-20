const { off } = require('../../lib/helpers');
const fetch = require('../../lib/fetch');

async function run(id) {
  try {
    await off();
    await fetch('/groups/0/action', {
      method: 'PUT',
      body: JSON.stringify({ scene: id }),
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = run;
