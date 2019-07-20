const commander = require('commander');

const program = new commander.Command('config');

const time = require('./time');

program.command('time').description('Set current time').action(time);

module.exports = program;
