import { Command } from 'commander';

import { run as recall } from './recall.js';
import { run as all } from './all.js';
import { run as unused } from './unused.js';
import { run as remove } from './remove.js';
import { run as sample } from './sample.js';

const program = new Command('scenes');

program
  .command('recall <id>')
  .description('Recall the given scene id')
  .action(recall);

program
  .command('remove <sceneIds...>')
  .description('Remove given sceneId')
  .action(remove);

program
  .command('sample')
  .description('Recall each scene')
  .option('-t --time <time>', 'Seconds before moving to next scene', 15)
  .action(sample);

program.command('all').description('Display all scenes').action(all);

program.command('unused').description('Find unused scenes').action(unused);

export default program;
