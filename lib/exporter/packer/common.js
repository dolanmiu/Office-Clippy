/*jslint nomen: true */
/*globals module, require, __dirname */
var jsonToXml = require('../jsonToXml');

module.exports = function (archive, officeFile, output) {
    'use strict';

    archive.pipe(output);

    var xmlDoc = jsonToXml(officeFile.document),
        styleXml = jsonToXml(officeFile.style),
        coreXml = jsonToXml(officeFile.properties.core);

    archive.bulk([
        {
            expand: true,
            cwd: officeFile.templateDir,
            src: ['**', '**/.rels']
        }
    ]);

    //archive.directory(officeFile.templateDir, false);

    archive.append(xmlDoc, {
        name: 'word/document.xml'
    });

    archive.append(styleXml, {
        name: 'word/newStyle.xml'
    });
    
    archive.append(coreXml, {
        name: 'docProps/core.xml'
    });

    archive.finalize();
};