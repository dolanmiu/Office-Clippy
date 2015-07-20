/*jslint nomen: true */
/*globals exports */

function createAlignmentTemplate(type) {
    'use strict';
    
    return {
        'w:jc': [{
            _attr: {
                'w:val': type
            }
        }]
    };
}

exports.center = function () {
    'use strict';

    return createAlignmentTemplate('center');
};

exports.left = function () {
    'use strict';

    return createAlignmentTemplate('left');
};

exports.right = function () {
    'use strict';

    return createAlignmentTemplate('right');
};

exports.both = function () {
    'use strict';

    return createAlignmentTemplate('both');
};