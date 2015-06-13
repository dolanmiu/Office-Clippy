/*jslint nomen: true */
/*globals exports */
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