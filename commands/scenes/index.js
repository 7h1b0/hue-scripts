const commander = require('commander');

const program = new commander.Command('scenes');

const recall = require('./recall');
const all = require('./all');
const unused = require('./unused');
const remove = require('./remove');
const sample = require('./sample');

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

module.exports = program;
