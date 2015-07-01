/*globals module, require */
var xml = require('xml');

function clense(jsonObject) {
    'use strict';
    var str = JSON.stringify(jsonObject);
    return JSON.parse(str);
}

module.exports = function (document) {
    'use strict';
    
    var cleansedDoc = clense(document);
    return xml(cleansedDoc);
};