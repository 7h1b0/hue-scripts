const fetch = require('../../lib/fetch');

async function run() {
  try {
    const res = await fetch('/scenes');
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

module.exports = run;
