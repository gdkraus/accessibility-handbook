This is an annotated list of accessibility testing tools and techniques
and the context in which they are best used.

General Testing Tools
---------------------

### [W3C Validator](http://validator.w3.org/)

This free service from the W3C will check the validity of your code
based on the doctype used.

### [WAVE Toolbar](http://wave.webaim.org/toolbar)

This free tool from WebAIM is a Firefox extension that checks for a
number of accessibility errors and features. Because it runs within the
browser, it can check password protected pages. The reports are shown
within the context of the page. The errors are based on the rendered
page (DOM), not the source code.

### [WAVE Web Accessibility Tool](http://wave.webaim.org/>)

This free service from WebAIM allows you to enter a URL and receive
reports on numerous accessibility errors and features. The detail of the
reports can be controlled through a side bar. Additionally it provides
documentation for why each error is important and how to fix it. This
service is not able to scan password-protected sites. The errors are
based on the rendered page (DOM), not the source code.

### [Accessibile Color Palette Evaluator](http://go.ncsu.edu/accessible-color-palette)

This free service from NC State will allow you to build a color palette
and evaluate all of the possible color combinations in a palette to see
which are accessible and which are not.

### [JuicyStudio Accessibility Toolbar](https://addons.mozilla.org/en-US/firefox/addon/juicy-studio-accessibility-too/)

This free tool is a Firefox plugin that will test for color contrast,
plus reveal information about ARIA roles and ARIA Live regions.

### [Web Evaluation Tools Bookmarklet](http://accessibility.oit.ncsu.edu/tools/web-evaluation-tools/)

This free tool from NC State will reveal several accessibility features
of Web Sites. It will reveal heading structure, ARIA landmarks, tabindex
attributes, and internal links. This tool is helpful primarily for
determining if a feature has been implemented correctly. This tool works
in any browser.

### [AChecker](http://achecker.ca/checker/index.php)

This free online tool checks for a number of accessibility errors. The
errors are based on the source code of the Web page.

### [Functional Accessibility Evaluator](http://fae.cita.uiuc.edu/)

This free online tool from the University of Illinois checks for a
number of accessibility features and errors. The reports are organized
functional evaluations, meaning they organize results by how users
interact with the page. This tool cannot check password-protected pages.

### [Firefox Accessibility Extension](http://firefox.cita.illinois.edu/)

This free toolbar from the University of Illinois works with Firefox. It
reports on accessibility features and errors for pages. This tool can
check password-protected pages.

### [Contrast Analyser for Windows and Mac](http://www.paciellogroup.com/resources/contrastAnalyser)

This free desktop-based tool from The Paciello Group tests for color
contrast. It lets you pick any two colors from your desktop, including
Web browsers, and see if they provide enough color contrast to be
accessible.

### [Color Contrast Analyzer for Google Chrome](http://accessibility.oit.ncsu.edu/tools/color-contrast-chrome/)

This is a free Chrome extension from NC State that allows you to check
for WCAG color contrast problems for text within images, on top of
gradients, or in PDF documents.

### [Web Accessibility Toolbar for IE](http://www.paciellogroup.com/resources/wat/ie)

This free browser-based tool from The Paciello Group tests for numerous
accessibility errors. It works within Internet Explorer. It can test
password protected Web pages.

### [Jim Thatcher Favelets](http://jimthatcher.com/favelets/)

This free set of browser-based tools from Jim Thatcher will test for
numerous accessibility features and errors. These extensions will work
in any browser. The errors are based on the rendered page (DOM), not the
source code.

### Keyboard-only Test

One of the most effective and easiest tests for accessibility is to see
if you can completely interact with your site using only your keyboard.

### Screen readers

Screen readers should not be your first tool for testing for
accessibility. Screen readers are specialized pieces of software that
have a steep learning curve to use effectively. Designing to standards
and using other tools to confirm that the UI has been implemented
accessibly should be used instead.

Additionally, just because something works with a screen reader does not
mean it is accessible with all types of assistive technology and for
people with other types of disabilities.

However, there are times when a screen reader is necessary for testing.
This is usually when you are implementing non-standard controls and
using ARIA. If you do need to use a screen reader, these are your main
options.

-   [JAWS](http://www.freedomscientific.com/products/fs/jaws-product-page.asp)
    - A Windows based screen reader that is considered the most robust
    for Web accessibility support. While JAWS is powerful, it has a very
    heavy imprint on your system. JAWS works best with Internet Explorer
    or Firefox.
-   [NVDA](http://www.nvda-project.org/) - A Windows based free and open
    source screen reader that is quite capable at Web accessibility.
    NVDA is a light-weight option that is easy to start up. It works
    best with Firefox.
-   [ChromeVox](http://www.chromevox.com/) - A free Chrome based screen
    reader which is available as an extension to the Chrome browser.
-   [VoiceOver](http://www.apple.com/accessibility/voiceover/) - A free
    OS X and iOS based screen reader that ships with OS X and iOS. For
    Web accessibility, VoiceOver works best with Safari.

