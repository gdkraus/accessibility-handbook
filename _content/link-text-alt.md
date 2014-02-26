Appendix A - Testing Tools

[![previous](images/left-arrow.png)Links Opening in New
Windows](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/link-new-window.html)

[Internal
Links![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/link-internal.html)

Page Contents {#page-contents-heading}
-------------

-   [![Good Technique](images/checkmark-small.png "Good Technique")A
    plain text link](#1)
-   [![Good Technique](images/checkmark-small.png "Good Technique")A
    linked image with appropriate alt text](#2)
-   [![Bad Technique](images/x-small.png "Bad Technique")A linked image
    with no text and an empty alt attribute.](#3)
-   [![Bad Technique](images/x-small.png "Bad Technique")A linked image
    with no text and a missing alt attribute](#4)
-   [![Bad Technique](images/x-small.png "Bad Technique")A linked image
    with no text, a missing alt attribute, but using the title attribute
    to convey the description of the image](#5)

In order for a link to be readable by screen reader users links must all
contain either plain text, or in the case of a linked image, alt text
describing where the link goes. If the linked image contains text, a
good general rule is to make the alt text the same, or similar to the
text in the image.

![Good Technique](images/checkmark-small.png "Good Technique")A plain text link. {#1}
--------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<a href="#">Get Help</a>
~~~~

### Implementation

[Get Help](#)

![Good Technique](images/checkmark-small.png "Good Technique")A linked image with appropriate alt text. {#2}
-------------------------------------------------------------------------------------------------------

In this case, screen readers will announce the alt attribute to the
user.

### Source Code

~~~~ {.code}
<a href="#"><img src="images/get-help.jpg" alt="Get Help"></a>
~~~~

### Implementation

[![Get Help](images/get-help.jpg)](#)

![Bad Technique](images/x-small.png "Bad Technique")A linked image with no text and an empty alt attribute. {#3}
-----------------------------------------------------------------------------------------------------------

In this case screen reader users will not know the function of this
link.

### Source Code

~~~~ {.code}
<a href="#"><img src="images/get-help.jpg" alt=""></a>
~~~~

### Implementation

[![](images/get-help.jpg)](#)

![Bad Technique](images/x-small.png "Bad Technique")A linked image with no text and a missing alt attribute. {#4}
------------------------------------------------------------------------------------------------------------

In this case screen reader users will not know the function of this
link.

### Source Code

~~~~ {.code}
<a href="#"><img src="images/get-help.jpg"></a>
~~~~

### Implementation

[![](images/get-help.jpg)](#)

![Bad Technique](images/x-small.png "Bad Technique")A linked image with no text, a missing alt attribute, but using the title attribute to convey the description of the image. {#5}
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Screen reader support for reading the title attribute for descriptions
of images is inconsistent and should not be relied upon as the sole
means to convey important information. However, it is alright to use the
title attribute in conjunction with an alt attribute.

### Source Code

~~~~ {.code}
<a href="#"><img src="images/get-help.jpg" title="Get Help"></a>
~~~~

### Implementation

[![](images/get-help.jpg)](# "Get Help")
