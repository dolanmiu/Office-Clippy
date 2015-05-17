'use strict';
var assert = require('assert');
var officeClippy = require('../');
var docx = require('../lib/docx');

describe('Testing creation of docx Office file', function () {


    it('creating a simple section in the file', function () {
        var file = docx.create();

        var paragraph = docx.createParagraph("Hello World").bold().italics().fontSize(30).heading1();
        file.addParagraph(paragraph);
    });
}); 