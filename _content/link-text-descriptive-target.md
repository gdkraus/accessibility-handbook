Appendix A - Testing Tools

[![previous](images/left-arrow.png)Link vs.
Button](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/link-behavior.html)

[Length of Link
Text![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/link-text-length.html)

Page Contents {#page-contents-heading}
-------------

-   [![Good Technique](images/checkmark-small.png "Good Technique")The
    link text describes where the link will take the user](#1)
-   [![Bad Technique](images/x-small.png "Bad Technique")The text "click
    here" does not describe where the link will go. The description for
    the link follows the actual link](#2)
-   [![Bad Technique](images/x-small.png "Bad Technique")The text "click
    here" is unnecessary because users already know they need to click a
    link to follow it](#3)

The link text should be descriptive of its target location. Do not use
“click here” as part of the text.

![Good Technique](images/checkmark-small.png "Good Technique")The link text describes where the link will take the user. {#1}
------------------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
Find out more information at the <a href="http://accessibility.oit.ncsu.edu">NC State IT  Accessibility</a> home page.
~~~~

### Implementation

Find out more information at the [NC State IT
Accessibility](http://accessibility.oit.ncsu.edu) home page.

![Bad Technique](images/x-small.png "Bad Technique")The text "click here" does not describe where the link will go. The description for the link follows the actual link. {#2}
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<a href="http://accessibility.oit.ncsu.edu">Click here</a> to find out more information at the NC State  IT Accessibility home page.
~~~~

### Implementation

[Click here](http://accessibility.oit.ncsu.edu) to find out more
information at the NC State IT Accessibility home page.

![Bad Technique](images/x-small.png "Bad Technique")The text "click here" is unnecessary because users already know they need to click a link to follow it. {#3}
-----------------------------------------------------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<a href="http://accessibility.oit.ncsu.edu">Click here to find out more information at the NC State  IT Accessibility home page.</a>
~~~~

### Implementation

[Click here to find out more information at the NC State IT
Accessibility home page.](http://accessibility.oit.ncsu.edu)
