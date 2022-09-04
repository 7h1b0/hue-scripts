import { request } from '../../lib/fetch.js';

function padStart(str) {
  return `${str}`.padStart(2, '0');
}

export async function run() {
  const now = new Date();
  const UTC = `${now.getUTCFullYear()}-${padStart(
    now.getUTCMonth() + 1,
  )}-${padStart(now.getUTCDate())}T${padStart(now.getUTCHours())}:${padStart(
    now.getUTCMinutes(),
  )}:${padStart(now.getUTCSeconds())}`;

  try {
    await request('/config', {
      method: 'PUT',
      body: JSON.stringify({ UTC }),
    });
    console.log('Done ;)');
  } catch (err) {
    console.error(err);
  }
}
