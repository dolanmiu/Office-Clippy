/*jslint nomen: true */
/*globals exports */

exports.heading = function (headingType) {
    'use strict';

    return {
        'w:pStyle': [{
            _attr: {
                'w:val': headingType
            }
        }]
    };
};