/*globals module, require */
var archiver = require('archiver');
var fs = require('fs');

var exports = module.exports = {};

exports.archive = function (officeFile, options) {
    'use strict';
    var archive = archiver('zip');
    //archive.pipe(outputStream);
    officeFile.files.forEach(function (element, index, array) {
        archive.append('string', {
            name: 'string.txt'
        });
    });


    return archive;
};

exports.output = function (archive, outputStream) {
    'use strict';
};