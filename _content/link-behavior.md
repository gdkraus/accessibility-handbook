Captioning Appendix A - Testing Tools

[![previous](images/left-arrow.png)Internal
Links](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/link-internal.html)

[Using Descriptive Link
Text![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/link-text-descriptive-target.html)

Page Contents {#page-contents-heading}
-------------

-   [![Good Technique](images/checkmark-small.png "Good Technique")A
    simple link](#1)
-   [![Bad Technique](images/x-small.png "Bad Technique")An anchor
    without an href element but with an onclick event](#2)
-   [![Bad Technique](images/x-small.png "Bad Technique")Hash tag for
    the href attribute and JavaScript for onclick event](#3)
-   [![Bad Technique](images/x-small.png "Bad Technique")JavaScript for
    the href attribute](#4)
-   [![Bad Technique](images/x-small.png "Bad Technique")JavaScript void
    for the href attribute and JavaScript for the onclick event](#5)
-   [![Good Technique](images/checkmark-small.png "Good Technique")Using
    a button with JavaScript](#6)
-   [![Good Technique](images/checkmark-small.png "Good Technique")Using
    a CSS-styled button with JavaScript](#7)
-   [![Good Technique](images/checkmark-small.png "Good Technique")Using
    progressive enhancement to change a link to a button](#8)

At its heart, a link connects two Web resources. It has two ends with an
explicit direction - a source and a destination. Links are most often
used to take a user from one Web page to another or from one location in
a page to another location in the same page.

![Good Technique](images/checkmark-small.png "Good Technique")A simple link {#1}
---------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<a href="http://www.ncsu.edu">NC State University</a>
~~~~

### Implementation

[NC State University](http://www.ncsu.edu)

The problem with links starts when developers start leveraging the
functionality of links for alternative purposes. Links provide some nice
conveniences.

-   Clicking on a link makes some other action happen.
-   The mouse usually changes shape when hovering over top of them,
    indicating to the user that the link does something.
-   They are automatically in the tab order, so users can use the
    keyboard to tab to them.

The most common example of using links for other purposes is using
JavaScript to execute some type of action when the link is clicked. What
we as developers would really like is this.

![Bad Technique](images/x-small.png "Bad Technique")An anchor without an href element but with an onclick event. {#2}
----------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<a onclick="alert('something');">Do something</a>
~~~~

Developers would really like this because it gets rid of the action of
going to another page through the href attribute, but it allows us to
perform other actions on the page, and we get all of the other benefits
of links like being clickable. However, we encounter a few problems.

-   The link no longer looks like a link.
-   The link is no longer keyboard accessible.
-   The mouse pointer doesn't change when hovering over it to indicate
    that it is clickable.

### Implementation

Do something

In the end developers end up using the anchor element in other creative
ways to get around this problem. The following three examples
demonstrate the popular patterns for implementing this functionality.

![Bad Technique](images/x-small.png "Bad Technique")Hash tag for the href attribute and JavaScript for onclick event {#3}
--------------------------------------------------------------------------------------------------------------------

In this instance the hash character is used to tell the browser to go to
an unnamed target within the same page. What this ends up doing is
making the page scroll back to the top of the page. In the meantime the
JavaScript function executes.

### Source Code

~~~~ {.code}
<a href="#" onclick="alert('something');">Do something</a>
~~~~

Here are the problems with this implementation.

-   It can cause the page to scroll back to the top
-   It adds an entry to the browser history, so it takes an additional
    click of the back button to go to the previous page.
-   If the user has JavaScript disabled, nothing happens.
-   For screen reader users, they hear that this is a "link" and they
    might assume that clicking it will do what all links do - it will
    take them to a new page.

### Implementation

[Do something](#)

![Bad Technique](images/x-small.png "Bad Technique")JavaScript for the href attribute {#4}
-------------------------------------------------------------------------------------

In this instance, a javascript action is fired when the link is clicked
in place of taking the user to a new location.

### Source Code

~~~~ {.code}
<a href="javascript:alert('something');">Do something</a>
~~~~

Here are the problems with this implementation.

-   If the user has JavaScript disabled, nothing happens.
-   For screen reader users, they hear that this is a "link" and they
    might assume that clicking it will do what all links do - it will
    take them to a new page.

### Implementation

[Do something](javascript:alert('something');)

![Bad Technique](images/x-small.png "Bad Technique")JavaScript void for the href attribute and JavaScript for the onclick event {#5}
-------------------------------------------------------------------------------------------------------------------------------

In this instance, the behavior of the href attribute is overridden and
in it's place an onclick event fires some JavaScript.

This implementation borders on comical. An anchor element is chosen
because it will perform an action when clicked. Then the anchor's
ability to perform an action when clicked is overridden. In place of its
default behavior, a new function is added to once again make the anchor
perform an action when clicked.

### Source Code

~~~~ {.code}
<a href="javascript:void(0)" onclick="alert('something');">Do something</a>
~~~~

Here are the problems with this implementation.

-   If the user has JavaScript disabled, nothing happens.
-   For screen reader users, they hear that this is a "link" and they
    might assume that clicking it will do what all links do - it will
    take them to a new page.

### Implementation

[Do something](javascript:void(0))

When is a link not a link? When it should be a button
-----------------------------------------------------

If you want to have the user click on an item within a page and have
some action via JavaScript performed within the same page, a button is
your best option.

![Good Technique](images/checkmark-small.png "Good Technique")Using a button with JavaScript {#6}
--------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<input type="button" value="Do Something" onClick="alert('something');">
~~~~

### Implementation

![Good Technique](images/checkmark-small.png "Good Technique")Using a CSS-styled button with JavaScript {#7}
-------------------------------------------------------------------------------------------------------

This instance is identical to the previous one except it uses CSS to
customize the button.

### Source Code

~~~~ {.code}
<style>
.something-button {
  border-top: 2px solid #e00;
  border-left: 2px solid #e00;
  border-right: 2px solid #300;
  border-bottom: 2px solid #300;
  background-color:#c00;
  color:#fff;
}
.something-button:active {
  border-top: 2px solid #300;
  border-left: 2px solid #300;
  border-right: 2px solid #e00;
  border-bottom: 2px solid #e00;
  background-color:#600;
  color:#fff;
}
</style>

<input class="something-button" type="button" value="Do Something" onClick="alert('something');">
~~~~

### Implementation

![Good Technique](images/checkmark-small.png "Good Technique")Using progressive enhancement to change a link to a button {#8}
------------------------------------------------------------------------------------------------------------------------

This instance is demonstrates progressive enhancement, testing to see
what capabilities a browser has and then delivering code that it can
handle.

In this case it starts with a basic link which takes you to another page
where the functionality occurs. If the browser has JavaScript enabled it
changes the link to a button and the behavior to a same page action.
This implementation solves the problem of when the user does not have
JavaScript enabled.

### Source Code

~~~~ {.code}
<p id="something" ><a href="something.html">Do Something</a></p>
<script type="text/javascript">
  (function(){
    if(document.getElementById){
      var e = document.getElementById('something');
      if(e){
        var but = document.createElement('input');
        but.setAttribute('type','button');
        but.setAttribute('value','Do Something');
        but.onclick = function(){
          alert('something');
        };
        e.parentNode.replaceChild(but);
      }
    }
  })();
</script>
~~~~

### Implementation

[Do Something](something.html)

Further Reading
---------------

-   [HTML5 specification on links from the
    W3C](http://www.w3.org/html/wg/drafts/html/master/links.html#links)
-   [HTML 4 specification on links from the
    W3C](http://www.w3.org/TR/html4/struct/links.html)
-   [How many users have JavaScript
    disabled?](http://developer.yahoo.com/blogs/ydn/posts/2010/10/how-many-users-have-javascript-disabled/)

