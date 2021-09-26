import { off } from '../../lib/helpers.js';
import { fetch } from '../../lib/fetch.js';

export async function run(id) {
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
