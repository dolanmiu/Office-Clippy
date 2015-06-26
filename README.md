#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> A tool to create office documents with JS


# Install

```sh
$ npm install --save office-clippy
```


# Usage

```js
var officeClippy = require('office-clippy');

officeClippy('Rainbow');
```
## Create blank Word Document
```
var file = docx.create();
```

## Create Paragraph
Every text block in OpenXML is organised in paragraphs.
```
var paragraph = docx.createParagraph("Hello World");
```
You can add more text to the paragraph by doing this:
```
paragraph.addText("Lorem Ipsum foo bar");
```
### Styles
#### Bold
```
paragraph.bold();
```
#### Italics
```
paragraph.italics();
```

#### Underline
```
paragraph.underline();
```

#### Heading1 - Heading5
```
paragraph.heading1();
paragraph.heading2();
paragraph.heading3();
paragraph.heading4();
paragraph.heading5();
```

#### Style Chaining
What if you want to create a paragraph which is ***bold*** and ***italic***?
```
paragraph.bold().italic();
```

#### Example
The following section:
```
var paragraph = docx.createParagraph("Hello World");
paragraph.addText("Lorem Ipsum foo bar");
paragraph.italics();
paragraph.bold();
```

Or:
```
var paragraph = docx.createParagraph("Hello World");
paragraph.addText("Lorem Ipsum foo bar");
paragraph.italics().bold();
```
Would produce:

***Hello World***

***Lorem Ipsum foo bar***

#### Note
You cannot (or should not) apply any other styling when doing a ```.heading1-5()``` tag. When was the last time you made a heading italic? Makes sense right?
# License

MIT © [Dolan Miu](http://dolan.bio)


[npm-image]: https://badge.fury.io/js/office-clippy.svg
[npm-url]: https://npmjs.org/package/office-clippy
[travis-image]: https://travis-ci.org/dolanmiu/office-clippy.svg?branch=master
[travis-url]: https://travis-ci.org/dolanmiu/office-clippy
[daviddm-image]: https://david-dm.org/dolanmiu/office-clippy.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dolanmiu/office-clippy
