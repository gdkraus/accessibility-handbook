It is important to have valid code on your Web pages. Web browsers are
very forgiving with bad code, but that does not guarantee that your what
you meant will actually be represented accurately by the browser and to
assistive technologies.

Just as a browser transforms your HTML code into a graphical Web page
for the user, assistive technologies also transform your Web page into
something that the assistive technology user needs. Your page might be
transformed into an audio format or a braille format for visually
impaired users. Those assistive technologies might not deal as well with
coding errors as a browser does, so it is important to have valid code.

Assistive technologies interpret Web page through various mechanisms.
Some will rely on the browser to construct the DOM and it will interact
directly with the browser to get information. Others will communicate
directly with the operating system and whatever information the browser
passes to it. Other still can take the raw HTML and build the page
itself.

To ensure you have valid code, simply run your code through a code
validator, like the [W3C Code Validator](http://validator.w3.org/).
There are many other tools available that incorporate the same test
suite as the W3C Validator.

Note: ARIA attributes will be marked as errors in some Web pages like
pre-HTML5 pages. ARIA attributes are fine to use in pre-HTML5 documents.
If these errors are the only ones you receive from the validator, your
page is fine. ARIA attributes should not be left out simply because they
do not validate - they offer a huge benefit for accessibility and
browsers know how to handle the attributes.
