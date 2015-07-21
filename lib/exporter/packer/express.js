/*jslint nomen: true */
/*globals module, require, __dirname */
var archiver = require('archiver');

var common = require('./common');

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

    common(archive, officeFile, res);
};