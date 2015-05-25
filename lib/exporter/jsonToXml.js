/*globals module, require */
var xml = require('xml');

module.exports = function (officeFile) {
    'use strict';
    
    officeFile.document = xml(officeFile.document);
    return officeFile;
};