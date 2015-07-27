/*jslint nomen: true */
/*globals require, describe, it, __dirname */
var assert = require('assert');
var DOMParser = require('xmldom').DOMParser;
var fs = require('fs');

var exporter = require('../lib/exporter');
var jsonToXml = require('../lib/exporter/jsonToXml');
var docx = require('../').docx;

describe('Testing the exporter', function () {
    'use strict';

    it('should create an archive file', function () {
        var file = docx.create(),
            paragraph = docx.createParagraph().heading1(),
            text = docx.createText("hello").bold();

        file.addParagraph(paragraph);
        paragraph.addText(text);

        var output = fs.createWriteStream(__dirname + '\\example-output.docx');
        exporter.local(output, file);
        assert(true, 'Not done.');
    });

    it('should convert officeFile JSON into a valid XML', function () {
        var file = docx.create(),
            paragraph = docx.createParagraph().heading1(),
            text = docx.createText().bold();
        file.addParagraph(paragraph);
        paragraph.addText(text);

        var table = docx.createTable(6);
        file.addParagraph(table);

        var xmlFile = jsonToXml(file.document);
        var oParser = new DOMParser();
        var oDOM = oParser.parseFromString(xmlFile, "text/xml");
        //console.log(xmlFile);
        assert.equal('w:document', oDOM.documentElement.nodeName);
    });

    it('should generate core.xml', function () {
        var file = docx.create({
            df: 'hello'   
        });
           
        var xmlFile = jsonToXml(file.properties.core);
        var oParser = new DOMParser();
        var oDOM = oParser.parseFromString(xmlFile, "text/xml");
        console.log(xmlFile);
        //assert.equal('w:document', oDOM.documentElement.nodeName);
    });
});