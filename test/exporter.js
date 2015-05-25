/*globals require, describe, it */
/*jslint nomen: true */
var assert = require('assert');
var DOMParser = require('xmldom').DOMParser;
var fs = require('fs');

var exporter = require('../lib/exporter');
var jsonToXml = require('../lib/exporter/jsonToXml');
var archiver = require('../lib/exporter/archiver');
var docx = require('../lib/docx');

describe('Testing the exporter', function () {
    'use strict';

    it('should create an archive file', function () {
        var files = [];

        //generator.archive(files);
        archiver.local(null, __dirname + '/example-output.zip');
        assert(true, 'Not done.');
    });

    it('should convert officeFile JSON into a valid XML', function () {
        var file = docx.create();
        var paragraph = docx.createParagraph();
        file.addParagraph(paragraph);
        jsonToXml(file);
        var oParser = new DOMParser();
        var oDOM = oParser.parseFromString(file.document, "text/xml");
        //console.log(oDOM.documentElement.nodeName == "parsererror" ? "error while parsing" : oDOM.documentElement.nodeName);
        assert.equal('w:document', oDOM.documentElement.nodeName);
    });
});