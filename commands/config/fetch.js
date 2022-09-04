import { request } from '../../lib/fetch.js';

export async function run() {
  try {
    const result = await request('/config', {
      method: 'GET',
    });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
