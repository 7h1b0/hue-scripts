#!/usr/bin/env node

const program = require('commander');

const scenesCommand = require('./commands/scenes/');
const sensorsCommand = require('./commands/sensors/');
const configCommand = require('./commands/config/');

program.addCommand(scenesCommand);
program.addCommand(sensorsCommand);
program.addCommand(configCommand);

program.on('command:*', (operands) => {
  console.error(`error: unknown command '${operands[0]}'`);
  process.exitCode = 1;
});

program.parse(process.argv);
