/*globals module */

module.exports = function () {
    'use strict';

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
            'dc:title': [{}]
        }, {
            'dc:subject': [{}]
        }, {
            'dc:creator': [{}]
        }, {
            'cp:keywords': [{}]
        }, {
            'dc:description': [{}]
        }, {
            'cp:lastModifiedBy': [{}]
        }, {
            'cp:revision': [{}]
        }, {
            'dcterms:created': [{
                _attr: {
                    'xsi:type': 'dcterms:W3CDTF'
                }
            }]
        }, {
            'dcterms:modified': [{
                _attr: {
                    'xsi:type': 'dcterms:W3CDTF'
                }
            }]
        }]
    };
};