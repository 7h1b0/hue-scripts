const fetch = require('../../lib/fetch');
const { toArray } = require('../../lib/helpers');
const recall = require('./recall');

async function delay(sec = 1) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}
async function run({ time }) {
  const scenes = toArray(await fetch('/scenes'));

  console.log(`There are ${scenes.length} scenes on your Hue Bridge`);

  for (scene of scenes) {
    console.log(`Recall ${scene.id}`);
    await recall(scene.id);
    await delay(time);
  }
  console.log('Done ;)');
}

module.exports = run;
