/*jslint nomen: true */
/*globals module, require, __dirname */
var archiver = require('archiver');
var fs = require('fs');

module.exports = function (officeFile, res, fileName) {
    'use strict';
    
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
};