'use strict';

let cli = require('heroku-cli-util');

module.exports = {
  topic: 'hello',
  command: 'world',
  description: 'tells you hello',
  default: true,
  help: 'help text for hello:world',
  flags: [
    {name: 'user', char: 'u', description: 'user to say hello to', hasValue: true}
  ],
  run: function (context) {
    if (context.flags.user) {
      cli.log(`Hello, ${context.flags.user}!`);
    } else {
      cli.log(`use cyan to ${cli.color.cyan('highlight')} a word`);
      cli.log(cli.color.red('use red for error text'));
      cli.log(cli.color.yellow('use yellow for warning text'));
    }
  }
};
