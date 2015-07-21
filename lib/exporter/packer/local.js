/*jslint nomen: true */
/*globals module, require, __dirname */
var archiver = require('archiver');

var common = require('./common');

module.exports = function (output, officeFile, fileName) {
    'use strict';

    var archive = archiver('zip');

    output.on('close', function () {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });

    archive.on('error', function (err) {
        throw err;
    });

    common(archive, officeFile, output);
};