import { findSensorInRules } from './rules.js';
import { request } from '../../lib/fetch.js';

function replaceSensorInConditions(rule, sourceId, destinationId) {
  return rule.conditions.map((condition) => {
    return {
      ...condition,
      address: condition.address.replace(sourceId, destinationId),
    };
  });
}

export async function run(sourceId, destinationId) {
  const sourceRules = await findSensorInRules(sourceId);

  const promises = sourceRules
    .map((rule) => {
      const conditions = replaceSensorInConditions(
        rule,
        sourceId,
        destinationId,
      );
      return {
        conditions,
        actions: rule.actions,
        name: rule.name,
      };
    })
    .map((payload) => {
      const body = JSON.stringify(payload);
      return request('/rules', {
        method: 'POST',
        body,
      });
    });

  await Promise.all(promises);

  console.log('Done');
}
