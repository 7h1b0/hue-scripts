import { fetch } from '../../lib/fetch.js';

export async function run() {
  try {
    const res = await fetch('/sensors');
    console.log(JSON.stringify(res));
  } catch (err) {
    console.error(err);
  }
}
