Appendix A - Testing Tools

[![previous](images/left-arrow.png)ARIA Checkbox
Tutorial](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/aria-checkbox.html)

[Captioning![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/captioning.html)

Page Contents {#page-contents-heading}
-------------

-   [![Good
    Technique](images/checkmark-small.png "Good Technique")Alternative
    text stored in the alt attribute](#1)
-   [![Good Technique](images/checkmark-small.png "Good Technique")An
    empty string stored in the alt attribute](#2)
-   [![Good Technique](images/checkmark-small.png "Good Technique")A
    contextual description](#3)
-   [![Good Technique](images/checkmark-small.png "Good Technique")A
    linked image with appropriate alt text](#4)
-   [![Good Technique](images/checkmark-small.png "Good Technique")A
    button image with appropriate alt text](#5)
-   [![Bad Technique](images/x-small.png "Bad Technique")An image
    missing the alt attribute](#6)
-   [![Bad Technique](images/x-small.png "Bad Technique")An important
    image with an empty alt attribute](#7)
-   [![Bad Technique](images/x-small.png "Bad Technique")An alt
    attribute on a decorative image](#8)

The basic premise of alternative text is to make it so all users can
read the same information and have the same interactions with a Web
page, regardless of whether or not they can see the images. Alternative
text is often used by visually disabled users with screen reading
software, where the description of an image is read to the user in place
of the image. Alternative text can take a couple of different forms.

If you don't know what to write for your alt text, think of the function
that the image plays within the page and make that your alt text. What
were you hoping to convey visually to users with that image? Make that
your alt text.

![Good Technique](images/checkmark-small.png "Good Technique")Alternative text stored in the alt attribute {#1}
----------------------------------------------------------------------------------------------------------

Text can be stored in the alt attribute of the image tag. These are
brief descriptions that tell the function this image plays in the page
or the information this image is trying to convey.

### Source Code

~~~~ {.code}
<a href="#"><img src="images/email-deleted.png" alt="Warning, all of your email is about to be deleted!"></a>
~~~~

[![Warning, all of your email is about to be
deleted!](images/email-deleted.png)](#)

![Good Technique](images/checkmark-small.png "Good Technique")An empty string stored in the alt attribute {#2}
---------------------------------------------------------------------------------------------------------

If an image is used simply for decoration and provides no substantive
meaning to the page, the alt attribute can be set to the empty string.
alt="" This tells screen readers to skip this image. Leaving off the alt
attribute altogether is not correct.

### Source Code

~~~~ {.code}
<img src="images/divider.jpg" alt="">
~~~~

![](images/divider.jpg)

![Good Technique](images/checkmark-small.png "Good Technique")A contextual description {#3}
--------------------------------------------------------------------------------------

Sometimes the function or the information an image is conveying is
already present within the text of the page surrounding the image. For
example, an image of the Mona Lisa with an accompanying paragraph
describing the Mona Lisa would not require a lengthy alt attribute since
the information is already present within the context on the page. In
this case, the alt attribute could be something simple like "Mona Lisa."
That way the screen reader user knows the image is present and knows
what it is, and they will be able to discern the information it is
conveying from the context.

Note, the image and text from this example are used from the [Wikipedia
entry on the Mona Lisa](http://en.wikipedia.org/wiki/Mona_Lisa).

### Source Code

~~~~ {.code}
<img src="images/mona-lisa.jpg" alt="Mona Lisa">
<p>The Mona Lisa is a half-length portrait of a woman by the Italian artist Leonardo da Vinci, which has been acclaimed as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world." The painting, thought to be a portrait of Lisa Gherardini, the wife of Francesco del Giocondo, is in oil on a poplar panel, and is believed to have been painted between 1503 and 1506.</p>
~~~~

![Mona Lisa](images/mona-lisa.jpg)

The Mona Lisa is a half-length portrait of a woman by the Italian artist
Leonardo da Vinci, which has been acclaimed as "the best known, the most
visited, the most written about, the most sung about, the most parodied
work of art in the world." The painting, thought to be a portrait of
Lisa Gherardini, the wife of Francesco del Giocondo, is in oil on a
poplar panel, and is believed to have been painted between 1503 and
1506.

![Good Technique](images/checkmark-small.png "Good Technique")A linked image with appropriate alt text. {#4}
-------------------------------------------------------------------------------------------------------

In this case, screen readers will announce the alt attribute to the
user.

### Source Code

~~~~ {.code}
<a href="#"><img src="images/get-help.jpg" alt="Get Help"></a>
~~~~

### Implementation

[![Get Help](images/get-help.jpg)](#)

![Good Technique](images/checkmark-small.png "Good Technique")A button image with appropriate alt text. {#5}
-------------------------------------------------------------------------------------------------------

Images used as buttons need to have alternative text too, just like
linked images.

### Source Code

~~~~ {.code}
<input type="image" name="submitbutton" src="images/submit-this-form-button.jpg" alt="Submit this form" />
~~~~

### Implementation

![Bad Technique](images/x-small.png "Bad Technique")An image missing the alt attribute {#6}
--------------------------------------------------------------------------------------

Screen readers will not have any information about this image. Usually
the name of the file will be read to them when there is no alt
attribute.

### Source Code

~~~~ {.code}
<a href="#"><img src="images/email-deleted.png"></a>
~~~~

[![](images/email-deleted.png)](#)

![Bad Technique](images/x-small.png "Bad Technique")An important image with an empty alt attribute. {#7}
---------------------------------------------------------------------------------------------------

When the alt attribute is blank, you are in essence telling the screen
reader to ignore this image. If the image is important they will miss
information available to other users.

### Source Code

~~~~ {.code}
<a href="#"><img src="images/email-deleted.png" alt=""></a>
~~~~

[![](images/email-deleted.png)](#)

![Bad Technique](images/x-small.png "Bad Technique")An alt attribute on a decorative image {#8}
------------------------------------------------------------------------------------------

Any time you include an alt attribute, screen reader users will have it
read to them. If an image is used simply for decoration and provides no
substantive meaning to the page, the alt attribute should be set to the
empty string. alt="" This tells screen readers to skip this image.
Leaving off the alt attribute altogether is not correct.

### Source Code

~~~~ {.code}
<img src="images/divider.jpg" alt="divider">
~~~~

![divider](images/divider.jpg)

Further Reading
---------------

-   [WebAIM's Tutorial on Appropriate Use of Alternative
    Text](http://webaim.org/techniques/alttext/)
-   [WebAIM's Tutorial on Creating Accessible
    Images](http://webaim.org/techniques/images/)

