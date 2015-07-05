/*jslint nomen: true */
/*globals exports */

exports.style = function (headingType) {
    'use strict';

    return {
        'w:pStyle': [{
            _attr: {
                'w:val': headingType
            }
        }]
    };
};