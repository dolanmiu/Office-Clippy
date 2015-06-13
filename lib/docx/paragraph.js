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
            paragraphProperties.push({
                'w:pStyle': [{
                    _attr: {
                        'w:val': 'Heading1'
                    }
                }]
            });
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
            this['w:r'][0]['w:rPr'].push({
                'w:b': [{
                    _attr: {
                        'w:val': true
                    }
                }]
            });
            return this;
        },
        italic: function () {
            this['w:r'][0]['w:rPr'].push({
                'w:i': [{
                    _attr: {
                        'w:val': true
                    }
                }]
            });
            return this;
        },
        underline: function (value) {
            if (value === undefined) {
                value = true;
            }
            this['w:r'][0]['w:rPr'].push({
                'w:u': [{
                    _attr: {
                        'w:val': true
                    }
                }]
            });
            return this;
        }
    };
    return run;
};