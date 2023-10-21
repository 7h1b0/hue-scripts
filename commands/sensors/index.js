import { Command } from 'commander';

import { run as all } from './all.js';
import { run as unused } from './unused.js';
import { run as remove } from './remove.js';
import { run as battery } from './battery.js';
import { run as rules } from './rules.js';
import { run as duplicate } from './duplicate.js';

const program = new Command('sensors');
program
  .command('remove <sensorIds...>')
  .description('Remove given sensorId')
  .action(remove);

program
  .command('rules <sensorId>')
  .description('Get rules for a  given sensorId')
  .action(rules);

program
  .command('duplicate <sourceId> <destinationId>')
  .description('Duplicate the rule from sourceId to destinationId')
  .action(duplicate);

program.command('all').description('Display all sensors').action(all);

program.command('unused').description('Find unused sensors').action(unused);

program
  .command('battery')
  .description('Returns battery of every sensors')
  .action(battery);

export default program;
