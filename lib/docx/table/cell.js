/*globals exports */
/*jslint nomen: true */

exports.createCell = function () {
    'use strict';

    var cell = {
        'w:tc': [{
            _attr: {

            }
        }, {
            'w:tcPr': [{
                'w:tcW': [{
                    _attr: {
                        'w:w': '3006',
                        'w:type': 'dxa'
                    }
                }]
            }]
        }],
        addParagraph: function (paragraph) {
            this['w:tc'].push(paragraph);
            return this;
        },
        addTable: function (table) {
            return this;
        }
    };
    return cell;
};