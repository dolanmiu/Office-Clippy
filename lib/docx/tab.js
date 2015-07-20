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

exports.createMaxRightTab = function () {
    'use strict';

    return createTabTemplate('right', 'RIGHT_MARGIN');
};

exports.createCenterTab = function (position) {
    'use strict';

    return createTabTemplate('center', position);
};


exports.createRightTab = function (position) {
    'use strict';

    return createTabTemplate('right', position);
};

exports.createLeftTab = function (position) {
    'use strict';
    
    return createTabTemplate('left', position);
};