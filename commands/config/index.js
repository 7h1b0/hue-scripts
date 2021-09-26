import commander from 'commander';

import { run as time } from './time.js';
import { run as fetchConfig } from './fetch.js';

const program = new commander.Command('config');

program.command('time').description('Set current time').action(time);
program.command('fetch').description('fetch config').action(fetchConfig);

export default program;
