/*jslint nomen: true */
/*globals exports */

exports.highlight = function (color) {
    'use strict';

    return {
        'w:rPr': [{
            'w:highlight': [{
                _attr: {
                    'w:val': color || 'yellow'
                }
            }]
        }]
    };
};