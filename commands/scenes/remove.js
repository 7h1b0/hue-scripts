import { fetch } from '../../lib/fetch.js';

export async function run(sceneIds) {
  for (id of sceneIds) {
    try {
      await fetch(`scenes/${id}`, {
        method: 'DELETE',
      });
    } catch (err) {
      console.error(`Cannot remove ${id}`);
    }
  }
}
