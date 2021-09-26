import { fetch } from '../../lib/fetch.js';

export async function run(sensorIds) {
  for (id of sensorIds) {
    try {
      await fetch(`sensors/${id}`, {
        method: 'DELETE',
      });
    } catch (err) {
      console.error(`Cannot remove ${id}`);
    }
  }
}
