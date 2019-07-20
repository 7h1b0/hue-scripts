const commander = require('commander');

const program = new commander.Command('sensors');

const all = require('./all');
const unused = require('./unused');
const remove = require('./remove');

program
  .command('remove <sensorIds...>')
  .description('Remove given sensorId')
  .action(remove);

program.command('all').description('Display all sensors').action(all);

program.command('unused').description('Find unused sensors').action(unused);

module.exports = program;
