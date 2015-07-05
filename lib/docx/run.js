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
            var runProperties = this['w:r'][0]['w:rPr'];

            runProperties.push({
                'w:b': [{
                    _attr: {
                        'w:val': true
                    }
                }]
            });
            return this;
        },
        italic: function () {
            var runProperties = this['w:r'][0]['w:rPr'];

            runProperties.push({
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
        },
        break: function () {
            var breakTag = {
                'w:br': []
            };
            this['w:r'].splice(1, 0, breakTag);
            return this;
        },
        rightText: function () {
            var run = this['w:r'];

            run.splice(1, 0, {
                'w:tab': []
            });
            return this;
        }
    };
    return run;
};