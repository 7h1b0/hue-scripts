import { fetch } from '../../lib/fetch.js';

export async function run() {
  try {
    const res = await fetch('/scenes');
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}
