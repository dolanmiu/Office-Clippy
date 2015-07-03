/*jslint nomen: true */
/*globals exports */

exports.setBorderMethods = function (paragraph) {
    'use strict';
    paragraph.borderBottom = function () {
        console.log("paragraph: " + JSON.stringify(paragraph));
        var paragraphProperties = paragraph['w:p'][1]['w:pPr'];
        paragraphProperties.push({
            'w:pBdr': [{
                'w:bottom': [{
                    _attr: {

                    }
                }]
            }]
        });
        return this;
    }

};
exports.borderBottom = function (paragraph) {
    'use strict';

    console.log("paragraph: " + JSON.stringify(paragraph));
    var paragraphProperties = paragraph['w:p'][1]['w:pPr'];
    paragraphProperties.push({
        'w:pBdr': [{
            'w:bottom': [{
                _attr: {

                }
            }]
        }]
    });
    return this;
};