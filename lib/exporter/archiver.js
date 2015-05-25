/*globals module, require */
/*jslint nomen: true */
var archiver = require('archiver');
var p = require('path');
var fs = require('fs');

var exports = module.exports = {};

exports.local = function (officeFile, fileName) {
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
    var file1 = __dirname + '/index.js';
    var file2 = __dirname + '/jsonToXml.js';

    archive.append('string', {
        name: 'index.js'
    });

    archive.append('string', {
        name: 'jsonToXml.js'
    });

    archive.directory(__dirname);

    archive.finalize();
}

exports.express = function (officeFile, res, fileName) {
    var archive = archiver('zip');

    res.on('close', function () {
        return res.status(200).send('OK').end();
    });

    archive.on('error', function (err) {
        res.status(500).send({
            error: err.message
        });
    });

    res.attachment(fileName);

    archive.pipe(res);
    console.log(__dirname);
    var file1 = __dirname + '/index.js';
    var file2 = __dirname + '/jsonToXml.js';

    archive.append('string', {
        name: 'index.js'
    });

    archive.append('string', {
        name: 'jsonToXml.js'
    });

    archive.directory(__dirname);

    archive.finalize();
}