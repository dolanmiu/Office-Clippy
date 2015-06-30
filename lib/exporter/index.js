/*globals exports, require */
var fs = require('fs');

var jsonToXml = require('./jsonToXml');
var packer = require('./packer');

exports.archive = function (officeFile, options) {
    'use strict';
    //jsonToXml(officeFile);
    //console.log(officeFile.document);
    //packer.local(officeFile, "test");
    packer.express(officeFile, "test express");
    //archive.pipe(outputStream);
    /*officeFile.files.forEach(function (element, index, array) {
        archive.append('string', {
            name: 'string.txt'
        });
    });*/
    //return archive;
};

exports.output = function (archive, outputStream) {
    'use strict';
};