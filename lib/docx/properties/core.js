/*jslint nomen: true */
/*globals module */

function createNullBlockOrValue(value) {
    'use strict';

    if (value === undefined) {
        return [{}];
    } else {
        return value;
    }
}

module.exports = function (options) {
    'use strict';

    if (options === undefined) {
        options = {};
    }

    return {
        'cp:coreProperties': [{
            _attr: {
                'xmlns:cp': 'http://schemas.openxmlformats.org/package/2006/metadata/core-properties',
                'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
                'xmlns:dcterms': 'http://purl.org/dc/terms/',
                'xmlns:dcmitype': 'http://purl.org/dc/dcmitype/',
                'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance'
            }
        }, {
            'dc:title': createNullBlockOrValue(options.title)
        }, {
            'dc:subject': createNullBlockOrValue(options.subject)
        }, {
            'dc:creator': createNullBlockOrValue(options.creator)
        }, {
            'cp:keywords': createNullBlockOrValue(options.keywords)
        }, {
            'dc:description': createNullBlockOrValue(options.description)
        }, {
            'cp:lastModifiedBy': createNullBlockOrValue(options.lastModifiedBy)
        }, {
            'cp:revision': createNullBlockOrValue(options.revision)
        }, {
            'dcterms:created': [{
                _attr: {
                    'xsi:type': 'dcterms:W3CDTF'
                }
            }, createNullBlockOrValue(options.created)]
        }, {
            'dcterms:modified': [{
                _attr: {
                    'xsi:type': 'dcterms:W3CDTF'
                }
            }, createNullBlockOrValue(options.modified)]
        }]
    };
};