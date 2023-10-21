import { request } from '../../lib/fetch.js';
import { toArray } from '../../lib/helpers.js';

export async function findSensorInRules(id) {
  const rules = toArray(await request('/rules'));

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

export async function run(sensorId) {
  const usedByRules = await findSensorInRules(sensorId);

  console.log(
    usedByRules.map((rule) => JSON.stringify(rule, null, 2)).join('\r\n'),
  );
}
