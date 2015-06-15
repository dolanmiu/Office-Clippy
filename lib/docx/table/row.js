/*globals exports */
/*jslint nomen: true */

exports.createRow = function () {
    'use strict';

    var row = {
        'w:tr': [],
        addColumn: function (column) {
            this['w:tr'].push(column);
        }
    };
    return row;
};