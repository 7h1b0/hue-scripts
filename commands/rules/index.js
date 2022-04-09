import { Command } from 'commander';

import { run as all } from './all.js';

const program = new Command('rules');

program.command('all').description('Display all rules').action(all);

export default program;
