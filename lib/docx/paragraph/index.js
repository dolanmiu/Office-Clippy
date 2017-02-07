/*jslint nomen: true */
/*globals exports, require */
var border = require('./border');
var style = require('./style');
var unorderedList = require('./unorderedList');
var alignment = require('./alignment');
var pageBreak = require('./break');
var highlight = require('./highlight');

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
            paragraphProperties.push(alignment.center());
            return this;
        },
        left: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push(alignment.left());
            return this;
        },
        right: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push(alignment.right());
            return this;
        },
        justified: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push(alignment.both());
            return this;
        },
        thematicBreak: function () {
            var paragraphProperties = paragraph['w:p'][1]['w:pPr'],
                bord = border.thematicBreak();

            paragraphProperties.push(bord);
            return this;
        },
        pageBreak: function () {
            var paragraphProperties = paragraph['w:p'][1]['w:pPr'],
                pBreak = pageBreak.pageBreak();
                
            paragraphProperties.push(pBreak);
            return this;
        },
        addTabStop: function (tab) {
            var paragraphProperties = paragraph['w:p'][1]['w:pPr'];

            paragraphProperties.push(tab);
            return this;
        },
        bullet: function (level) {
            var paragraphProperties = paragraph['w:p'][1]['w:pPr'];

            paragraphProperties.push(unorderedList.bullet());
            paragraphProperties.push(unorderedList.numberProperties(level));
            return this;
        },
        highlight: function(color){
            var paragraphProperties = paragraph['w:p'][2]['w:r'];

            paragraphProperties.splice(0, 0, highlight.highlight(color));
            return this;
        }
    };

    return paragraph;
};
