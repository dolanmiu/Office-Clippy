/*globals exports, require */
var fs = require('fs');

var packer = require('./packer');

exports.express = packer.express;
exports.local = packer.local;