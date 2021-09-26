import commander from 'commander';
import { run as fetchCapabilities } from './fetch.js';

const program = new commander.Command('capabilities');

export default program
  .command('fetch')
  .description('fetch capabilities')
  .action(fetchCapabilities);
