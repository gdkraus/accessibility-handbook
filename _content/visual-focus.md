Appendix A - Testing Tools

[![previous](images/left-arrow.png)Mouse and Keyboard
Events](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/mouse-and-keyboard-events.html)

[Menus![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/menus.html)

Page Contents {#page-contents-heading}
-------------

-   [![Bad Technique](images/x-small.png "Bad Technique")Disabling the
    browser's default outline style for focusable elements](#1)
-   [![Good
    Technique](images/checkmark-small.png "Good Technique")Explicitly
    set the focus ring style](#2)
-   [![Bad Technique](images/x-small.png "Bad Technique")Overriding the
    focus for specifically focusable elements, like links](#3)

It is important to make sure that keyboard-only users can determine
where they are in the page when they are using the Tab key to navigate.
They can know where they are because when an object receives focus,
there is a focus ring around the object.

By default, the browser will always show a focus ring around an object
that is keyboard focusable, like a link, or any object which has a value
set of 0 or greater for the tabindex attribute. However, it is very
popular to override this default browser behavior, often in CSS reset
files. It is often accomplished with the following code.

![Bad Technique](images/x-small.png "Bad Technique")Disabling the browser's default outline style for focusable elements {#1}
------------------------------------------------------------------------------------------------------------------------

This makes it so elements that can receive the keyboard focus do not
have a focus ring around them when the user tabs to it. This makes it
very difficult for non-mouse users to know where they are on the page.

~~~~ {.code}
<style>
  :focus {outline:none;}
</style>
~~~~

The solution is very simple. You simply need to either not override the
default browser behavior, or explicitly set a property for the focus

![Good Technique](images/checkmark-small.png "Good Technique")Explicitly set the focus ring style {#2}
-------------------------------------------------------------------------------------------------

If you need to correct the issue, you can explicitly set the focus style
to make it whatever style you want.

~~~~ {.code}
<style>
  :focus {outline:2px solid #f00;}
</style>
~~~~

Also, be sure you don't have any overridden focus rules on objects like
links.

![Bad Technique](images/x-small.png "Bad Technique")Overriding the focus for specifically focusable elements, like links {#3}
------------------------------------------------------------------------------------------------------------------------

~~~~ {.code}
<style>
  a:focus {outline:none;}
</style>
~~~~
