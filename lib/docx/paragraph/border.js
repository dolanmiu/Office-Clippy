/*jslint nomen: true */
/*globals exports */

exports.thematicBreak = function () {
    'use strict';

    return {
        'w:pBdr': [{
            'w:bottom': [{
                _attr: {
                    'w:color': 'auto',
                    'w:space': '1',
                    'w:sz': '6',
                    'w:val': 'single'
                }
            }]
        }]
    };
};

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
