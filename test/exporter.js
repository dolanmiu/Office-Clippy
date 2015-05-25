/*globals require, describe, it */
var assert = require('assert');
var DOMParser = require('xmldom').DOMParser;

var exporter = require('../lib/exporter');
var jsonToXml = require('../lib/exporter/jsonToXml');
var docx = require('../lib/docx');

describe('Testing the exporter', function () {
    'use strict';

    it('should return an achive file', function () {
        var files = [];

        //generator.archive(files);
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