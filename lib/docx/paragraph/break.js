/*jslint node: true, nomen: true */
exports.pageBreak = function () {
    'use strict';

    return {
        'w:r': [{
            'w:br': [{
                _attr: {
                    'w:type': 'page'
                }
            }]
        }]
    };
};