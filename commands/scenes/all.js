import { request } from '../../lib/fetch.js';

export async function run() {
  try {
    const res = await request('/scenes');
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}
