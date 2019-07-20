const fetch = require('../../lib/fetch');
const { toArray } = require('../../lib/helpers');

function findSensorInSchedules(schedules, id) {
  return schedules.filter((schedule) => {
    return schedule.command.address.includes(`sensors/${id}/`);
  });
}

function findSensorInRules(rules, id) {
  return rules.filter((rule) => {
    const target = `sensors/${id}/`;
    const isInCondition = rule.conditions.some((condition) =>
      condition.address.includes(target),
    );
    const isInAction = rule.actions.some((action) =>
      action.address.includes(target),
    );

    return isInAction || isInCondition;
  });
}

async function run() {
  const schedules = toArray(await fetch('/schedules'));
  const rules = toArray(await fetch('/rules'));
  const sensors = toArray(await fetch('/sensors'));

  const unusedSensors = sensors.filter(({ id }) => {
    const usedByschedules = findSensorInSchedules(schedules, id);
    const usedByRules = findSensorInRules(rules, id);

    return usedByschedules.length === 0 && usedByRules.length === 0;
  });

  if (unusedSensors.length) {
    console.log(
      `Sensors unused:\n${unusedSensors
        .map((sensor) => `${sensor.id} - ${sensor.name}`)
        .join('\n')}`,
    );
  } else {
    console.log('Every sensor is used');
  }
}

module.exports = run;
