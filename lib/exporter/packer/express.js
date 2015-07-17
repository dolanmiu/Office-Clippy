/*jslint nomen: true */
/*globals module, require, __dirname */
var archiver = require('archiver');
var fs = require('fs');
var p = require('path');

var jsonToXml = require('../jsonToXml');

module.exports = function (res, officeFile, name) {
    'use strict';

    var archive = archiver('zip');

    //res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

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
    res.attachment(name + '.' + officeFile.extention);
    //res.attachment(name + '.zip');

    //this is the streaming magic
    archive.pipe(res);

    var xmlDoc = jsonToXml(officeFile.document);
    var styleXml = jsonToXml(officeFile.style);

    //archive.directory(officeFile.templateDir, false);

    archive.bulk([
        {
            expand: true,
            cwd: officeFile.templateDir,
            src: ['**', '**/.rels']
        }
    ]);
    
    archive.append(xmlDoc, {
        name: 'word/document.xml'
    });
    
    archive.append(styleXml, {
        name: 'word/newStyle.xml'
    });

    archive.finalize();
};