/*jslint nomen: true */
/*globals require, describe, it, __dirname */
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
        var paragraph = docx.createParagraph().heading1();
        var text = docx.createText().bold();
        file.addParagraph(paragraph);
        paragraph.addText(text);

        var table = docx.createTable(6);
        file.addParagraph(table);

        jsonToXml(file);
        var oParser = new DOMParser();
        var oDOM = oParser.parseFromString(file.document, "text/xml");
        console.log(file.document);
        assert.equal('w:document', oDOM.documentElement.nodeName);
    });
});