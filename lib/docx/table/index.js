/*jslint nomen: true */
/*globals exports, require */
var row = require('./row');
var cell = require('./cell');

exports.createTable = function (columnCount) {
    'use strict';

    var table = {
        'w:tbl': [{
            _attr: {}
        }, {
            'w:tblPr': [{
                _attr: {}
            }]
        }, {
            'w:tblGrid': (function () {
                var columns = [],
                    width = parseInt(9015 / columnCount, 10),
                    i;

                for (i = 0; i < columnCount; i += 1) {
                    columns.push({
                        'w:gridCol': [{
                            _attr: {
                                'w:w': width
                            }
                        }]
                    });
                }

                return columns;
            }())
        }],
        addRow: function (row) {
               
            return this;
        }
    };
    return table;
};

exports.createRow = row.createRow;
exports.createCell = row.createCell;