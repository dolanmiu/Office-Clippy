/*jslint nomen: true */
/*globals exports, require */
var border = require('./border');
var style = require('./style');
var unorderedList = require('./unorderedList');

exports.createParagraph = function (text) {
    'use strict';
    if (text === undefined) {
        text = '';
    }

    var paragraph = {
        'w:p': [{
            _attr: {}
        }, {
            'w:pPr': [{
                _attr: {}
            }]
        }, {
            'w:r': [{
                'w:t': text
            }]
        }],
        addText: function (run) {
            var paragraphs = this['w:p'];
            paragraphs.splice(paragraphs.length - 1, 0, run);
            return this;
        },
        heading1: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push(style.style('Heading1'));
            return this;
        },
        heading2: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push(style.style('Heading2'));
            return this;
        },
        heading3: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push(style.style('Heading3'));
            return this;
        },
        title: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push(style.style('Title'));
            return this;
        },
        center: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push({
                'w:jc': [{
                    _attr: {
                        'w:val': 'center'
                    }
                }]
            });
            return this;
        },
        thematicBreak: function () {
            var paragraphProperties = paragraph['w:p'][1]['w:pPr'],
                bord = border.thematicBreak();

            paragraphProperties.push(bord);
            return this;
        },
        enableRightText: function () {
            var paragraphProperties = paragraph['w:p'][1]['w:pPr'];

            paragraphProperties.push({
                'w:tabs': [{
                    'w:tab': [{
                        _attr: {
                            'w:val': 'right',
                            'w:pos': '9026'
                        }
                    }]
                }]
            });
            return this;
        },
        bullet: function () {
            var paragraphProperties = paragraph['w:p'][1]['w:pPr'];

            paragraphProperties.push(unorderedList.bullet());
            paragraphProperties.push(unorderedList.numberProperties());
            return this;
        }
    };

    //paragraph.borderBottom = border.borderBottom;
    return paragraph;
};