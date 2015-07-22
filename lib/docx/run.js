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
        strike: function () {
            var runProperties = this['w:r'][0]['w:rPr'];

            runProperties.push({
                'w:strike': [{}]
            });
            return this;
        },
        subScript: function () {
            var runProperties = this['w:r'][0]['w:rPr'];

            runProperties.push({
                'w:vertAlign': [{
                    _attr: {
                        'w:val': 'subscript'
                    }
                }]
            });
            return this;
        },
        superScript: function () {
            var runProperties = this['w:r'][0]['w:rPr'];

            runProperties.push({
                'w:vertAlign': [{
                    _attr: {
                        'w:val': 'superscript'
                    }
                }]
            });
            return this;
        },
        glow: function () {
            var runProperties = this['w:r'][0]['w:rPr'];

            runProperties.push({
                'w14:glow': [{
                    _attr: {
                        'w14:rad': '63500'
                    }
                }, {
                    'w14:schemeClr': [{
                        _attr: {
                            'w14:val': 'accent3'
                        }
                    }, {
                        'w14:alpha': [{
                            _attr: {
                                'w14:val': '60000'
                            }
                        }]
                    }, {
                        'w14:satMod': [{
                            'w14:val': '175000'
                        }]
                    }]
                }]
            });
            return this;
        },
        doubleStrike: function () {
            var runProperties = this['w:r'][0]['w:rPr'];

            runProperties.push({
                'w:dstrike': [{}]
            });
            return this;
        },
        allCaps: function () {
            var runProperties = this['w:r'][0]['w:rPr'];

            runProperties.push({
                'w:caps': [{}]
            });
            return this;
        },
        smallCaps: function () {
            var runProperties = this['w:r'][0]['w:rPr'];

            runProperties.push({
                'w:smallCaps': [{}]
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
        tab: function () {
            var run = this['w:r'];

            run.splice(1, 0, {
                'w:tab': []
            });
            return this;
        }
    };
    return run;
};