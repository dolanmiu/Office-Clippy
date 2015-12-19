#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> A tool to create office documents (currently only Word Documents) with JS

[![NPM](https://nodei.co/npm/office-clippy.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/office-clippy/)

![Clippy in Microsoft Office](http://i60.tinypic.com/339pvtt.png "Clippy in Microsoft Office")

# Table of Contents
- [Install](#)
- [Usage](#)
	- [Create simple Word Document](#)
	- [Create Paragraph](#)
		- [Styles](#)
			- [Heading1 - Heading5](#)
			- [Title](#)
		- [Text Alignment](#)
			- [Example](#)
		- [Thematic Break (Page Break)](#)
	- [Text](#)
		- [Typographical Emphasis](#)
			- [Bold](#)
			- [Italics](#)
			- [Underline](#)
		- [Break](#)
		- [Chaining](#)
	- [Bullet Points](#)
	- [Tab Stops](#)
		- [Left Tab Stop](#)
		- [Center Tab Stop](#)
		- [Right Tab Stop](#)
		- [Max Right Tab Stop](#)
		- [Example](#)
- [Exporting](#)
	- [Express](#)
	- [Standalone .docx file](#)
- [Examples](#)
- [License](#)

# Install

```sh
$ npm install --save office-clippy
```


# Usage

```js
var officeClippy = require('office-clippy');

// Used to create docx files
var docx = officeClippy.docx;

// Used to export the file into a .docx file
var exporter = officeClippy.exporter;

```
## Create simple Word Document
```js
var doc = docx.create();
var paragraph = docx.createParagraph("Some test");
doc.addParagraph(paragraph);
```

### Document properties
You can add properties to the Word document by specifying options, for example:
```js
var doc = docx.create({
    creator: 'Joe Bloggs',
    description: 'Some descriptive information here',
    title: 'My first word document'
});
```

#### Full list of options:
```
creator
description
title
subject
keywords
lastModifiedBy
revision
```

You can mix and match whatever properties you want, or provide no properties.

## Create Paragraph
Every text block in OpenXML is organised in paragraphs. You can add more text to the paragraph by doing this:
```js
var paragraph = docx.createParagraph();
```
```js
var text = docx.createText("Lorem Ipsum Foo Bar");
var paragraph = docx.createParagraph();
paragraph.addText(text);
```
```js
var paragraph = docx.createParagraph("Short hand notation for adding text.");
```

After you create the paragraph, you must add the paragraph into the `document`:
```js
doc.addParagraph(paragraph);
```

### Styles
Styles is a very important part of the look of a word document. At the moment, only headings and title is supported, but son the rest will be supported along with custom styles!

![Word 2013 Styles menu](http://content.gcflearnfree.org/topics/233/style_apply_choose.png "Word 2013 Styles menu")

#### Heading1 - Heading5
```js
paragraph.heading1();
paragraph.heading2();
paragraph.heading3();
paragraph.heading4();
paragraph.heading5();
```

#### Title
```js
paragraph.title();
```

### Text Alignment
To change the text alignment of a paragraph, for center, left, right or justified:
```js
paragraph.center();
```
```js
paragraph.left();
```
```js
paragraph.right();
```
```js
paragraph.justified();
```

#### Example
```js
paragraph.heading1().center();
```
The above will create a `heading 1` which is `centered`.

### Thematic Break
To add a break in the page, simply add `.thematicBreak()` on a paragraph:

```js
var paragraph = docx.createParagraph("Amazing Heading").heading1().thematicBreak();
```
The above example will create a heading with a page break directly under it.

### Page Break
To move to a new page (insert a page break), simply add `.pageBreak()` on a paragraph:

```js
var paragraph = docx.createParagraph("Amazing Heading").heading1().pageBreak();
```
The above example will create a heading and start a new page immediately afterwards.

## Text
Paragraphs need text objects. To create text:
```js
var text = docx.createText("My awesome text here for my university dissertation");
paragraph.addText(text);
```
Text objects have methods inside which changes the way the text is displayed.

### Typographical Emphasis
More info [here](https://english.stackexchange.com/questions/97081/what-is-the-typography-term-which-refers-to-the-usage-of-bold-italics-and-unde)
#### Bold
```js
text.bold();
```

#### Italics
```js
text.italic();
```

#### Underline
```js
text.underline();
```

#### Strike through
```js
text.strike();
```

#### Double strike through
```js
text.doubleStrike();
```

#### Superscript
```js
text.superScript();
```

#### Subscript
```js
text.subScript();
```

#### All Capitals
```js
text.allCaps();
```

#### Small Capitals
```js
text.smallCaps();
```

### Break
Sometimes you would want to put text underneath another line of text but inside the same paragraph.
```js
text.break();
```

### Chaining
What if you want to create a paragraph which is ***bold*** and ***italic***?
```js
paragraph.bold().italic();
```

## Bullet Points
To make a bullet point, simply make a paragraph into a bullet point:
```js
var text = docx.createText("Bullet points");
var paragraph = docx.createParagraph(text).bullet();

var text2 = docx.createText("Are awesome");
var paragraph2 = docx.createParagraph(text2).bullet();

doc.addParagraph(paragraph);
doc.addParagraph(paragraph2);
```
This will produce:
* Bullet points
* Are awesome

## Tab Stops
If you do not know why tab stops are useful, then I recommend you do a bit of research. It enables side by side text which is nicely laid out without the need for tables, or constantly pressing space bar.

**Note**: At the moment, the unit of measurement for a tab stop is counter intuitive for a human. It is using OpenXMLs own measuring system. For example, 2268 roughly translates to 3cm. Therefore in the future, I may consider changing it to percentages or even cm.

![Word 2013 Tabs](http://www.teachucomp.com/wp-content/uploads/blog-4-22-2015-UsingTabStopsInWord-1024x577.png "Word 2013 Tab Stops")

How it works is that, you create a `tabStop`, then add it to the paragraph. Then just add a `tab()` method call to a text object. Adding multiple `tabStops` will mean you would have to chain `tab()` until the desired `tabStop` is selected. Example is shown below.

### Left Tab Stop
```js
var tabStop = docx.createLeftTabStop(2268);
paragraph.addTabStop();
```
2268 is the distance from the left side.

### Center Tab Stop
```js
var tabStop = docx.createCenterTabStop(2268);
paragraph.addTabStop();
```
2268 is the distance from the left side.

### Right Tab Stop
```js
var tabStop = docx.createRightTabStop(2268);
paragraph.addTabStop();
```
2268 is the distance from the left side.

### Max Right Tab Stop
```js
var tabStop = docx.createMaxRightTabStop();
paragraph.addTabStop();
```
This will create a tab stop on the very edge of the right hand side. Handy for right aligning and left aligning text on the same line.

### Example
```js
var tabStop = docx.createMaxRightTabStop();
var paragraph = docx.createParagraph().addTabStop(tabStop);
var leftText = docx.createText("Hey everyone").bold();
var rightText = docx.createText("11th November 2015").tab();
paragraph.addText(leftText);
paragraph.addText(rightText);
```
The example above will create a left aligned text, and a right aligned text on the same line. The laymans approach to this problem would be to either use text boxes or tables. YUK!

```js
var tabStop = docx.createMaxRightTabStop();
var tabStop2 = docx.createLeftTabStop(1000);
var paragraph = docx.createParagraph();
paragraph.addTabStop(tabStop);
paragraph.addTabStop(tabStop2);
var text = docx.createText("Second tab stop here I come!").tab().tab();
paragraph.addText(text);
```
The above shows the use of two tab stops, and how to select/use it.

# Exporting
I used the express exporter in my [website](http://www.dolan.bio). It's very useful, and is the preferred way if you want to make a downloadable file for a visitor. it is much better than generating a physical file on the server, and then passing a download link to that file.
## Express
Simply use the exporter, and pass in the necessary parameters:
```js
var officeClippy = require('office-clippy');
var docx = officeClippy.docx;
var exporter = officeClippy.exporter;

var doc = docx.create();
exporter.express(res, doc, 'My first word document');
```
where `res` is the response object obtained through the Express router. It is that simple. The file will begin downloading in the browser.

## Standalone .docx file
```js
var fs = require('fs');

var doc = docx.create();
var output = fs.createWriteStream(__dirname + '\\My first word document.docx');
exporter.local(output, doc);
```

# Examples
## In practice
I used this library in my personal portfolio/CV website. Click generate CV for a demonstration. [http://www.dolan.bio](http://www.dolan.bio)

## General
#### Simple paragraph
```js
var doc = docx.create();
var output = fs.createWriteStream(__dirname + '\\example.docx');

var paragraph = docx.createParagraph("Hello World");
var institutionText = docx.createText("University College London").bold(),
var dateText = docx.createText("5th Dec 2015").tab().bold();
paragraph.addText(institutionText);
paragraph.addText(dateText);

doc.addParagraph(paragraph);
exporter.local(output, doc);
```

Or:
```js
var doc = docx.create();
var output = fs.createWriteStream(__dirname + '\\example.docx');

var paragraph = docx.createParagraph("Hello World");
var institutionText = docx.createText("University College London").bold(),
var dateText = docx.createText("5th Dec 2015").tab().bold();
paragraph.addText(institutionText);
paragraph.addText(dateText);

doc.addParagraph(paragraph);
exporter.local(output, doc);
```
Would produce:

***Hello World***

***Lorem Ipsum foo bar***

# License

MIT © [Dolan Miu](http://www.dolan.bio)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[npm-image]: https://badge.fury.io/js/office-clippy.svg
[npm-url]: https://npmjs.org/package/office-clippy
[travis-image]: https://travis-ci.org/dolanmiu/office-clippy.svg?branch=master
[travis-url]: https://travis-ci.org/dolanmiu/office-clippy
[daviddm-image]: https://david-dm.org/dolanmiu/office-clippy.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dolanmiu/office-clippy
