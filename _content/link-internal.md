Appendix A - Testing Tools

[![previous](images/left-arrow.png)Link Text or Alt
Attribute](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/link-text-alt.html)

[Link vs.
Button![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/link-behavior.html)

Page Contents {#page-contents-heading}
-------------

-   [![Good Technique](images/checkmark-small.png "Good Technique")Using
    the ID attribute to make an internal link](#1)
-   [![Bad Technique](images/x-small.png "Bad Technique")Using the name
    attribute to make an internal link](#2)

If you want to make a link go to another point on the same page there
are two ways to accomplish it - one correct way and one deprecated way.

![Good Technique](images/checkmark-small.png "Good Technique")Using the ID attribute to make an internal link {#1}
-------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<a href="#services">View all of our services</a>
<p>...</p>
<h2 id="services">Our Service</h2>
~~~~

### Implementation

[View all of our services](#services)

...

Our Services {#services}
------------

![Bad Technique](images/x-small.png "Bad Technique")Using the name attribute to make an internal link {#2}
-----------------------------------------------------------------------------------------------------

The name attribute has been deprecated in HTML5 and should not be used.

### Source Code

~~~~ {.code}
<a href="#services">View all of our services</a>
<p>...</p>
<a name="services"></a>
<h2>Our Service</h2>
~~~~

### Implementation

[View all of our services](#services)

...

Our Services
------------
