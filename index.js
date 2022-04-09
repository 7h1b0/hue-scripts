#!/usr/bin/env node

import { Command } from 'commander';

import scenesCommand from './commands/scenes/index.js';
import sensorsCommand from './commands/sensors/index.js';
import rulesCommand from './commands/rules/index.js';
import configCommand from './commands/config/index.js';
import capabilitiesCommand from './commands/capabilities/index.js';

const program = new Command();
program.addCommand(scenesCommand);
program.addCommand(sensorsCommand);
program.addCommand(rulesCommand);
program.addCommand(configCommand);
program.addCommand(capabilitiesCommand);

program.on('command:*', (operands) => {
  console.error(`error: unknown command '${operands[0]}'`);
  process.exitCode = 1;
});

program.parse(process.argv);
