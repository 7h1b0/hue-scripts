const fetch = require('../../lib/fetch');

function padStart(str) {
  return `${str}`.padStart(2, '0');
}
async function run() {
  const now = new Date();
  const UTC = `${now.getUTCFullYear()}-${padStart(
    now.getUTCMonth(),
  )}-${padStart(now.getUTCDate())}T${padStart(now.getUTCHours())}:${padStart(
    now.getUTCMinutes(),
  )}:${padStart(now.getUTCSeconds())}`;

  try {
    await fetch('/config', {
      method: 'PUT',
      body: JSON.stringify({ UTC }),
    });
    console.log('Done ;)');
  } catch (err) {
    console.error(err);
  }
}

module.exports = run;
