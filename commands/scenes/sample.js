import { request } from '../../lib/fetch.js';
import { toArray } from '../../lib/helpers.js';
import { run as recall } from './recall.js';

async function delay(sec = 1) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}

export async function run({ time }) {
  const scenes = toArray(await request('/scenes'));

  console.log(`There are ${scenes.length} scenes on your Hue Bridge`);

  for (scene of scenes) {
    console.log(`Recall ${scene.id}`);
    await recall(scene.id);
    await delay(time);
  }
  console.log('Done ;)');
}
