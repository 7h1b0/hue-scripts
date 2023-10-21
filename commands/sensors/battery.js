import { request } from '../../lib/fetch.js';

const validTypes = [
  'ZLLPresence',
  'ZLLLightLevel',
  'ZLLTemperature',
  'ZLLSwitch',
];
export async function run() {
  try {
    const res = await request('/sensors');

    const sensorsWithbattery = Object.entries(res)
      .filter(([_, sensor]) => {
        return validTypes.includes(sensor.type);
      })
      .map(([id, sensor]) => {
        return {
          id,
          name: sensor.name,
          battery: sensor.config.battery,
        };
      });

    console.log(sensorsWithbattery);
  } catch (err) {
    console.error(err);
  }
}
