#!/usr/bin/env node
'use strict';
var meow = require('meow');
var depm = require('./');

var cli = meow({
  help: [
    'Usage',
    '  depm <input>',
    '',
    'Example',
    '  depm Unicorn'
  ].join('\n')
});

depm(cli.input[0]);
