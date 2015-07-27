/*jslint nomen: true */
/*globals exports, require, __dirname */
var paragraph = require('./paragraph');
var run = require('./run');
var table = require('./table');
var style = require('./style');
var tabStop = require('./tabStop');
var properties = require('./properties');

function createHeaderReference(id, type) {
    'use strict';

    return [{
        _attr: {
            'r:id': id,
            'w:type': type
        }
    }];
}

function replaceInject(object, key, value) {
    'use strict';

    var old = JSON.stringify(object).replace(key, value);
    return JSON.parse(old);
}

exports.create = function (options) {
    'use strict';

    var officeFile = {
        addParagraph: function (paragraph) {
            var body = this.document['w:document'][1]['w:body'];
            paragraph = replaceInject(paragraph, 'RIGHT_MARGIN', '9026');
            body.splice(body.length - 1, 0, paragraph);
        },
        style: style(),
        extention: 'docx',
        templateDir: __dirname + '/template',
        properties: {
            core: properties.core(options)
        }
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
                            'w:top': '1440',
                            'w:right': '1440',
                            'w:bottom': '1440',
                            'w:left': '1440',
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

exports.createMaxRightTabStop = tabStop.createMaxRightTabStop;
exports.createRightTabStop = tabStop.createRightTabStop;
exports.createLeftTabStop = tabStop.createLeftTabStop;
exports.createCenterTabStop = tabStop.createCenterTabStop;