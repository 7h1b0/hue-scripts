import { fetch } from '../../lib/fetch.js';
import { toArray } from '../../lib/helpers.js';

function findSceneInSchedules(schedules, id) {
  return schedules.filter((schedule) => {
    return schedule.command.body.scene
      ? schedule.command.body.scene === id
      : false;
  });
}

function findSceneInRules(rules, id) {
  return rules.filter((rule) => {
    return rule.actions.some((action) =>
      action.body.scene ? action.body.scene === id : false,
    );
  });
}

export async function run() {
  const schedules = toArray(await fetch('/schedules'));
  const rules = toArray(await fetch('/rules'));
  const scenes = toArray(await fetch('/scenes'));

  const unusedScenes = scenes.filter(({ id }) => {
    const usedByschedules = findSceneInSchedules(schedules, id);
    const usedByRules = findSceneInRules(rules, id);

    return usedByschedules.length === 0 && usedByRules.length === 0;
  });

  if (unusedScenes.length) {
    console.log(
      `Scenes unused:\n${unusedScenes.map((scene) => scene.id).join('\n')}`,
    );
  } else {
    console.log('Every scene is used');
  }
}
