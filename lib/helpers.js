import { request } from './fetch.js';

export function toArray(jsonObject) {
  return Object.keys(jsonObject).map((id) => ({ ...jsonObject[id], id }));
}

/**
 * Shutdown all lights
 */
export async function off() {
  try {
    await request('/groups/0/action', {
      method: 'PUT',
      body: JSON.stringify({ on: false }),
    });
  } catch (err) {
    console.error(err);
  }
}
