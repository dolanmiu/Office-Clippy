/*globals module, require */
/*jslint nomen: true */
var exports = module.exports = {};

exports.createParagraph = function (text) {
    'use strict';
    if (text === undefined) {
        text = '';
    }

    var paragraph = {
        'w:p': [{
            _attr: {}
        }, {
            'w:pPr': [{}]
        }, {
            'w:r': [{
                'w:t': text
            }]
        }],
        addText: function (run) {
            var paragraphs = this['w:p'];
            paragraphs.splice(paragraphs.length - 1, 0, run);
            return this;
        }
    };
    return paragraph;
};

exports.createText = function (text) {
    'use strict';

    var run = {
        'w:r': [{
            'w:rPr': [{
                _attr: {}
            }]
        }, {
            'w:t': text
        }],
        bold: function () {
            this['w:r'][0]['w:rPr'][0]._attr['w:b'] = [{
                _attr: {
                    'w:val': true
                }
            }];
            return this;
        }
    };
    return run;
};