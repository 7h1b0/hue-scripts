import { fetch } from '../../lib/fetch.js';

export async function run() {
  try {
    const res = await fetch('/sensors');

    const sensorsWithbattery = Object.values(res).filter((sensor) => {
      return Number.isInteger(sensor.config.battery);
    });

    console.log(
      sensorsWithbattery.map((sensor) => ({
        name: sensor.name,
        battery: sensor.config.battery,
      })),
    );
  } catch (err) {
    console.error(err);
  }
}
