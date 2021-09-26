import commander from 'commander';

import { run as all } from './all.js';
import { run as unused } from './unused.js';
import { run as remove } from './remove.js';
import { run as battery } from './battery.js';

const program = new commander.Command('sensors');
program
  .command('remove <sensorIds...>')
  .description('Remove given sensorId')
  .action(remove);

program.command('all').description('Display all sensors').action(all);

program.command('unused').description('Find unused sensors').action(unused);

program
  .command('battery')
  .description('Returns battery of every sensors')
  .action(battery);

export default program;
