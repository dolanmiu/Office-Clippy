/*globals module, require */
var archiver = require('archiver');
var fs = require('fs');

module.exports = function (officeFile, outputStream, options) {
    'use strict';
    var archive = archiver('zip');
    archive.pipe(outputStream);
    archive.append('string', {
        name: 'string.txt'
    });
};