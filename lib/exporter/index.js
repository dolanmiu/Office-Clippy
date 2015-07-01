/*globals exports, require */
var fs = require('fs');

var jsonToXml = require('./jsonToXml');
var packer = require('./packer');

exports.archive = function (res, officeFile, name) {
    'use strict';
    //jsonToXml(officeFile);
    //console.log(officeFile.document);
    //packer.local(officeFile, "test");
    packer.express(res, officeFile, name);
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