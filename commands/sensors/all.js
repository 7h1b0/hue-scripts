import { request } from '../../lib/fetch.js';

export async function run() {
  try {
    const res = await request('/sensors');
    console.log(JSON.stringify(res));
  } catch (err) {
    console.error(err);
  }
}
