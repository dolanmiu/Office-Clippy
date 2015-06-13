/*globals require, describe, it */
var assert = require('assert');

//var officeClippy = require('../');
var docx = require('../lib/docx');

describe('Testing creation of docx Office file', function () {
    'use strict';

    it('creating a simple blank paragraph in the file', function () {
        var file = docx.create();
        var paragraph = docx.createParagraph();
        //var paragraph = docx.createParagraph("Hello World").bold().italics().fontSize(30).heading1();
        file.addParagraph(paragraph);
        assert.equal(true, file.document['w:document'][1]['w:body'][0].hasOwnProperty('w:p'));
    });

    it('creating a text filled paragraph in the file', function () {
        var file = docx.create();
        var paragraph = docx.createParagraph("Hello World");
        var text = docx.createText().bold();
        paragraph.addText(text);
        file.addParagraph(paragraph);
        //console.log(JSON.stringify(file.document));
        assert.equal(true, file.document['w:document'][1]['w:body'][0].hasOwnProperty('w:p'));
    });

    it('should create docx with heading1', function () {
        var file = docx.create();
        var paragraph = docx.createParagraph("Hello World").heading1();
        var text = docx.createText();
        paragraph.addText(text);
        file.addParagraph(paragraph);
        console.log(JSON.stringify(file.document));
    });
});