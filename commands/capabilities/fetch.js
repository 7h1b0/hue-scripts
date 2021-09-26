import { fetch } from '../../lib/fetch.js';

export async function run() {
  try {
    const result = await fetch('/capabilities', {
      method: 'GET',
    });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
