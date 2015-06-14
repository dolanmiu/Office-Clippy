/*globals exports */
/*jslint nomen: true */

exports.createTable = function (columnCount) {
    'use strict';

    var table = {
        'w:tbl': [{
            _attr: {}
        }, {
            'w:tblPr': [{
                _attr: {}
            }]
        }, {
            'w:tblGrid': (function () {
                var columns = [],
                    width = parseInt(9015 / columnCount, 10),
                    i;

                for (i = 0; i < columnCount; i += 1) {
                    columns.push({
                        'w:gridCol': [{
                            _attr: {
                                'w:w': width
                            }
                        }]
                    });
                }

                return columns;
            }())
        }, {
            'w:r': [{
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
        },
        heading2: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push({
                'w:pStyle': [{
                    _attr: {
                        'w:val': 'Heading2'
                    }
                }]
            });
            return this;
        },
        heading3: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push({
                'w:pStyle': [{
                    _attr: {
                        'w:val': 'Heading3'
                    }
                }]
            });
            return this;
        },
        title: function () {
            var paragraphProperties = this['w:p'][1]['w:pPr'];
            paragraphProperties.push({
                'w:pStyle': [{
                    _attr: {
                        'w:val': 'Title'
                    }
                }]
            });
            return this;
        }
    };
    return table;
};