import { off } from '../../lib/helpers.js';
import { request } from '../../lib/fetch.js';

export async function run(id) {
  try {
    await off();
    await request('/groups/0/action', {
      method: 'PUT',
      body: JSON.stringify({ scene: id }),
    });
  } catch (err) {
    console.error(err);
  }
}
