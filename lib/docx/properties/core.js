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

function getCurrentDate() {
    'use strict';

    var date = new Date(),
        year = date.getFullYear(),
        month = ('0' + (date.getMonth() + 1)).slice(-2),
        day = ('0' + date.getDate()).slice(-2),
        hours = ('0' + date.getHours()).slice(-2),
        minutes = ('0' + date.getMinutes()).slice(-2),
        seconds = ('0' + date.getSeconds()).slice(-2);

    return year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':' + seconds + 'Z';
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
            }, getCurrentDate()]
        }, {
            'dcterms:modified': [{
                _attr: {
                    'xsi:type': 'dcterms:W3CDTF'
                }
            }, getCurrentDate()]
        }]
    };
};