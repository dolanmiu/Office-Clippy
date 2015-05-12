'use strict';
var assert = require('assert');
var officeClippy = require('../');
var docx = require('../lib/docx');

describe('Testing creation of Office file an', function () {


    it('must have at least one test', function () {
        var file = docx.create();

        var paragraph = docx.createParagraph("Hello World").bold().italics().fontSize(30).heading1();
        file.addParagraph(paragraph);
    });
}); 