'use strict';
var cli         = require('heroku-cli-util');
var extend      = require('util')._extend;
var command     = require('./commands/pt');
var description = "Search and/or tail logs";

// `pt` topic kept for backwards-compatibility.
exports.topics = [{ name: "papertrail", description: description },
                  { name: "pt",         description: description }];

exports.commands = [
  extend({ topic: "pt",         description: description }, command),
  extend({ topic: "papertrail", description: description }, command)
];

exports.postInstallHelp = `
Use heroku-papertrail with ${cli.color.cyan('heroku papertrail')}:
  $ heroku papertrail -a myapp
  <logs>

Filter the logs:
  $ heroku papertrail -a myapp R14

Tail the logs:
  $ heroku papertrail -a myapp --tail
`;
