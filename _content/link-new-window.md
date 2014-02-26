Captioning Appendix A - Testing Tools

[![previous](images/left-arrow.png)Links
Overview](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/links.html)

[Link Text or Alt
Attribute![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/link-text-alt.html)

Page Contents {#page-contents-heading}
-------------

-   [![Good Technique](images/checkmark-small.png "Good Technique")Using
    text to alert the user that the link is opening in a new window](#1)
-   [![Good Technique](images/checkmark-small.png "Good Technique")Using
    an image with alt text to alert the user the link is opening in a
    new window](#2)
-   [![Good Technique](images/checkmark-small.png "Good Technique")Using
    an image that is only visible on :hover and :focus that alerts the
    user the link is opening in a new window](#3)
-   [![Bad Technique](images/x-small.png "Bad Technique")The user will
    be taken to a window when clicking on the link and will not be
    notified](#4)

When opening a link it is best to open it in the same window or tab
where the user currently is. Opening a link in a new window causes three
main problems.

-   Screen reader users, screen magnifier users, and users with certain
    cognitive impairments can become disoriented when they are taken to
    a new window
-   The use of the back button, the most used button within the browser,
    is broken.
-   Certain user agents, like kiosks, are unable to open new windows or
    tabs.

Users have the ability to choose if they want to open a particular link
in a new window or tab.

There are times when it is appropriate to open a link in a new window,
such as when launching a Web application. There are some cases where you
do not want the user to be able to back out of an application. **If you
do open a link in a new window you need to alert the user that you are
doing so.**

There are a number of solutions to this problem.

![Good Technique](images/checkmark-small.png "Good Technique")Using text to alert the user that the link is opening in a new window. {#1}
------------------------------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<a href="http://accessibility.oit.ncsu.edu" target="_blank">NC State IT Accessibility (new window)</a>
~~~~

### Implementation

[NC State IT Accessibility (new
window)](http://accessibility.oit.ncsu.edu)

![Good Technique](images/checkmark-small.png "Good Technique")Using an image with alt text to alert the user the link is opening in a new window. {#2}
-------------------------------------------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<a href="http://accessibility.oit.ncsu.edu" target="_blank">NC State IT Accessibility <img src="images/new-window.jpg" alt="opens in new window"></a>
~~~~

### Implementation

[NC State IT Accessibility ![opens in new
window](images/new-window.jpg)](http://accessibility.oit.ncsu.edu)

![Good Technique](images/checkmark-small.png "Good Technique")Using an image that is only visible on :hover and :focus that alerts the user the link is opening in a new window {#3}
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
a.ncsu-a11y-link-new-window img {
    border: 0 none;
}
a.ncsu-a11y-link-new-window span {
    height: 1px;
    left: -999px;
    overflow: hidden;
    position: absolute;
    top: auto;
    width: 1px;
}
a.ncsu-a11y-link-new-window:hover span, a.ncsu-a11y-link-new-window:focus span, a.ncsu-a11y-link-new-window:active span {
    background-color: #FFFFFF;
    border: 1px solid #888888;
    border-radius: 5px 5px 5px 5px;
    display: inline;
    height: inherit;
    left: inherit;
    margin-left: 0.5em;
    padding: 0.2em 0.2em 0.1em;
    position: absolute;
    top: inherit;
    width: inherit;
}

<a target="_blank" href="http://www.ncsu.edu" class="ncsu-a11y-link-new-window">External link<span><img alt="opens in a new window" src="images/new-window.jpg"></span></a>
                
~~~~

### Implementation

[External link![opens in a new
window](images/new-window.jpg)](http://www.ncsu.edu)

![Bad Technique](images/x-small.png "Bad Technique")The user will be taken to a window when clicking on the link and will not be notified. {#4}
------------------------------------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<a href="http://accessibility.oit.ncsu.edu" target="_blank">NC State IT Accessibility</a>
~~~~

### Implementation

[NC State IT Accessibility](http://accessibility.oit.ncsu.edu)
