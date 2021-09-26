import commander from 'commander';

import { run as all } from './all.js';

const program = new commander.Command('rules');

program.command('all').description('Display all rules').action(all);

export default program;
