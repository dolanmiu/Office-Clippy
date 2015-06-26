/*globals module, require */
var xml = require('xml');

function clense(jsonObject) {
    'use strict';
    var str = JSON.stringify(jsonObject);
    return JSON.parse(str);
}



module.exports = function (officeFile) {
    'use strict';

    officeFile.document = clense(officeFile.document);
    officeFile.document = xml(officeFile.document);
    return officeFile;
};