/*jslint nomen: true */
/*globals module, require, __dirname */
var archiver = require('archiver');
var fs = require('fs');

module.exports = function (officeFile, fileName) {
    'use strict';

    var archive = archiver('zip');
    var output = fs.createWriteStream(__dirname + '/example-output.zip');

    output.on('close', function () {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });

    archive.on('error', function (err) {
        throw err;
    });

    archive.pipe(output);
    console.log(__dirname);
    var file1 = __dirname + '/express.js';
    var file2 = __dirname + '/index.js';

    /*archive.append('string', {
        name: 'index.js'
    });

    archive.append('string', {
        name: 'jsonToXml.js'
    });

    archive.directory(__dirname);

    archive.finalize();*/

    archive
        .append(fs.createReadStream(file1), {
            name: 'file1.txt'
        })
        .append(fs.createReadStream(file2), {
            name: 'file2.txt'
        })
        .finalize();
};