/*jslint nomen: true */
/*globals module, require, __dirname */
var archiver = require('archiver');
var fs = require('fs');
var p = require('path');

/*module.exports = function (officeFile, res, fileName) {
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
};*/

module.exports = function (res) {
    'use strict';
    var archive = archiver('zip');

    archive.on('error', function (err) {
        res.status(500).send({
            error: err.message
        });
    });

    //on stream closed we can end the request
    res.on('close', function () {
        console.log('Archive wrote %d bytes', archive.pointer());
        return res.status(200).send('OK').end();
    });

    //set the archive name
    res.attachment('archive-name.zip');

    //this is the streaming magic
    archive.pipe(res);

    var files = [__dirname + '/fixtures/file1.txt', __dirname + '/fixtures/file2.txt'];

    for (var i in files) {
        archive.append(fs.createReadStream(files[i]), {
            name: p.basename(files[i])
        });
    }

    archive.finalize();
}