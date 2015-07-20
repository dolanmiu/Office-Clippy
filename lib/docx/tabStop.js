/*jslint nomen: true */
/*globals exports, require */

function createTabTemplate(value, position) {
    'use strict';
    
    return {
        'w:tabs': [{
            'w:tab': [{
                _attr: {
                    'w:val': value,
                    'w:pos': position
                }
            }]
        }]
    };
}

exports.createMaxRightTabStop = function () {
    'use strict';

    return createTabTemplate('right', 'RIGHT_MARGIN');
};

exports.createCenterTabStop = function (position) {
    'use strict';

    return createTabTemplate('center', position);
};


exports.createRightTabStop = function (position) {
    'use strict';

    return createTabTemplate('right', position);
};

exports.createLeftTabStop = function (position) {
    'use strict';
    
    return createTabTemplate('left', position);
};