import { Command } from 'commander';
import { run as fetchCapabilities } from './fetch.js';

const program = new Command('capabilities');

export default program
  .command('fetch')
  .description('fetch capabilities')
  .action(fetchCapabilities);
