/*globals exports */
/*jslint nomen: true */

exports.createRow = function () {
    'use strict';

    var row = {
        'w:tr': [],
        addCell: function (cell) {
            this['w:tr'].push(cell);
            return this;
        }
    };
    return row;
};