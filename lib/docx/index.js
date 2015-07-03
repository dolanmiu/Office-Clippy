/*jslint nomen: true */
/*globals exports, require, __dirname */
var paragraph = require('./paragraph');
var run = require('./run');
var table = require('./table');

exports.create = function () {
    'use strict';

    var officeFile = {
        files: [],
        document: {},
        addParagraph: function (paragraph) {
            var body = this.document['w:document'][1]['w:body'];
            body.splice(body.length - 1, 0, paragraph);
        },
        extention: 'docx',
        templateDir: __dirname + '/template'
    };

    var document = {
        'w:document': [{
            _attr: {
                'xmlns:wpc': 'http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas',
                'xmlns:mc': 'http://schemas.openxmlformats.org/markup-compatibility/2006',
                'xmlns:o': 'urn:schemas-microsoft-com:office:office',
                'xmlns:r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
                'xmlns:m': 'http://schemas.openxmlformats.org/officeDocument/2006/math',
                'xmlns:v': 'urn:schemas-microsoft-com:vml',
                'xmlns:wp14': 'http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing',
                'xmlns:wp': 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
                'xmlns:w10': 'urn:schemas-microsoft-com:office:word',
                'xmlns:w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
                'xmlns:w14': 'http://schemas.microsoft.com/office/word/2010/wordml',
                'xmlns:w15': 'http://schemas.microsoft.com/office/word/2012/wordml',
                'xmlns:wpg': 'http://schemas.microsoft.com/office/word/2010/wordprocessingGroup',
                'xmlns:wpi': 'http://schemas.microsoft.com/office/word/2010/wordprocessingInk',
                'xmlns:wne': 'http://schemas.microsoft.com/office/word/2006/wordml',
                'xmlns:wps': 'http://schemas.microsoft.com/office/word/2010/wordprocessingShape',
                'mc:Ignorable': 'w14 w15 wp14'
            }
        }, {
            'w:body': [{
                'w:sectPr': [{
                    _attr: {
                        'w:rsidR': '00B64E8F',
                        'w:rsidRPr': '00D842E4',
                        'w:rsidSect': '000A6AD0'
                    }
                }, {
                    'w:pgSz': [{
                        _attr: {
                            'w:w': '11906',
                            'w:h': '16838'
                        }
                    }]
                }, {
                    'w:pgMar': [{
                        _attr: {
                            'w:top': '426',
                            'w:right': '707',
                            'w:bottom': '1985',
                            'w:left': '851',
                            'w:header': '708',
                            'w:footer': '708',
                            'w:gutter': '0'
                        }
                    }]
                }, {
                    'w:cols': {
                        _attr: {
                            'w:space': '708'
                        }
                    }
                }, {
                    'w:docGrid': {
                        _attr: {
                            'w:linePitch': '360'
                        }
                    }
                }]
            }]
        }, {
            hello: function () {
                return "pls";
            }
        }]
    };

    officeFile.document = document;

    return officeFile;
};

exports.createParagraph = paragraph.createParagraph;
exports.createText = run.createText;
exports.createTable = table.createTable;
exports.createRow = table.createRow;