'use strict'

let cli = require('heroku-cli-util')
let co = require('co')

function * app (context, heroku) {
  let res = yield {
    app: heroku.get(`/apps/${context.app}`),
    config: heroku.get(`/apps/${context.app}/config-vars`)
  }
  cli.debug(res.app)
  cli.debug(res.config)
}

module.exports = {
  topic: 'hello',
  command: 'app',
  description: 'tells you hello',
  help: 'help text for hello:world',
  needsApp: true,
  needsAuth: true,
  run: cli.command(co.wrap(app))
}
