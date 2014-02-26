Appendix A - Testing Tools

[![previous](images/left-arrow.png)Skip to Main Content
Links](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/skip-to-main-content.html)

[Color
Contrast![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/color-contrast.html)

Page Contents {#page-contents-heading}
-------------

-   [![Good Technique](images/checkmark-small.png "Good Technique")Using
    "for" and "id" attributes to attach labels to form elements](#1)
-   [![Good
    Technique](images/checkmark-small.png "Good Technique")Nesting the
    input element within the label tag to attach labels to form
    elements](#2)
-   [![Good Technique](images/checkmark-small.png "Good Technique")Text
    field, ideal implementation](#3)
-   [![Good Technique](images/checkmark-small.png "Good Technique")Text
    field, alternative implementation](#4)
-   [![Good
    Technique](images/checkmark-small.png "Good Technique")Single
    checkbox](#5)
-   [![Good
    Technique](images/checkmark-small.png "Good Technique")Multiple
    related checkboxes](#6)
-   ![Good Technique](images/checkmark-small.png "Good Technique")Radio
    button/a\>
-   [![Good
    Technique](images/checkmark-small.png "Good Technique")Select menu,
    single item selection](#8)
-   [![Good
    Technique](images/checkmark-small.png "Good Technique")Select menu,
    multiple item selection](#9)
-   [![Good Technique](images/checkmark-small.png "Good Technique")Jump
    menu, with "Go" button](#10)
-   [![Good Technique](images/checkmark-small.png "Good Technique")Text
    area](#11)
-   [![Good
    Technique](images/checkmark-small.png "Good Technique")Button](#12)
-   [![Good Technique](images/checkmark-small.png "Good Technique")Image
    buttons](#13)
-   [![Bad Technique](images/x-small.png "Bad Technique")Unlabeled input
    element](#14)
-   [![Bad Technique](images/x-small.png "Bad Technique")Automatic jump
    menu](#15)
-   [![Bad Technique](images/x-small.png "Bad Technique")Image button,
    no alt text](#16)

The basic requirement of forms is that all of the input fields need to
be labelled with label elements.

Using "for" and "id" attributes to attach labels to form elements

All form input elements must have a corresponding label to indicate what
information is being requested. This method explicitly ties a label to
an input element by matching the "for" attribute in the label tag with
the "id" attribute in the input element tag. NOTE: This method will
usually give you more flexibility in applying custom styling to your
form elements. All of the examples on this page will use this method.

### Source Code

~~~~ {.code}
<label for="first-name">First Name</label> <input id="first-name" name="first-name" type="text" />
~~~~

### Implementation

First Name

Nesting the input element within the label tag to attach labels to form
elements

All form input elements must have a corresponding label to indicate what
information is being requested. This method ties a label to an input
element by wrapping the input element with the label tag.

### Source Code

~~~~ {.code}
<label>First Name <input type="text" name="first-name" /></label>
~~~~

### Implementation

First Name

Text field, ideal implementation

This method has a visible label that describes what information is being
asked for in the text box.

### Source Code

~~~~ {.code}
<label for="last-name">Last Name</label> <input id="last-name" type="text" name="last-name" />
~~~~

### Implementation

Last Name

Text field, alternative implementation

Sometimes for stylistic reasons you do not want have a visible label
displayed. Instead of a visible label you can use the title attribute of
the input element to describe what information is being asked for. If
this technique is used you still need to visually let your user know
what information you are asking for. This is often handled by
pre-populating the text field with the information being requested.

This introduces new issues that must be dealt with, such as the
following.

-   having to clear the text out of the box before entering new
    information or risk having strange data submitted like "CityRaleigh"
-   if the user deletes the initial text then later comes back to the
    form element, will they remember what information was being asked
    for

These issues can be handled with JavaScript. While the following
technique will sometimes produce errors or warnings by automated
accessibility checkers, it is usable by major screen readers.

This technique is derived from [testing done by Terrill
Thompson](http://terrillthompson.com/blog/38).

### Source Code

~~~~ {.code}
<input name="state" title="state" id="state" type="text" />
<script>
  var defaultValue = 'State';

  //add default value to search
  document.getElementById('state').value=defaultValue;

  //when either search field gets focus, remove the pre-populated text (if it exists)
  if (document.addEventListener) { //browser supports addEventListener
    document.getElementById('state').addEventListener('focus',function (e) {
    if (document.getElementById('state').value==defaultValue)
      document.getElementById('state').value="";
    },true);
  }
  else if (document.attachEvent) { //browser is IE
    document.getElementById('state').attachEvent('onfocus',function (e) {
    if (document.getElementById('state').value==defaultValue)
      document.getElementById('state').value="";
    });
  }

  //when either search field loses focus (e.g., user tabs away)
  //if field has no value, restore default value
  if (document.addEventListener) { //browser supports addEventListener
    document.getElementById('state').addEventListener('blur',function (e) {
    if (document.getElementById('state').value=="")
      document.getElementById('state').value=defaultValue;
    },true);
  }
  else if (document.attachEvent) { //browser is IE
    document.getElementById('state').attachEvent('onblur',function (e) {
    if (document.getElementById('state').value=="")
      document.getElementById('state').value=defaultValue;
    });
  }
</script>
~~~~

### Implementation

![Good Technique](images/checkmark-small.png "Good Technique")Single checkbox {#5}
-----------------------------------------------------------------------------

For a single checkbox you simply need to attach the label to the input
element.

### Source Code

~~~~ {.code}
<input id="sendemail" type="checkbox" name="sendemail" value="sendemail" />
<label for="sendemail">Send me email updates.</label>
~~~~

### Implementation

Send me email updates.

![Good Technique](images/checkmark-small.png "Good Technique")Multiple related checkboxes {#6}
-----------------------------------------------------------------------------------------

When you have a collection of related check boxes you need to include
them in a fieldset and provide a legend. This helps visually identify
related elements plus provides a description for how these items are
related.

### Source Code

~~~~ {.code}
<fieldset>
  <legend>Select your days of availability:</legend>
  <input id="monday" type="checkbox" name="availability" value="monday" />
  <label for="monday">Monday</label><br />
  <input id="tuesday" type="checkbox" name="availability" value="tuesday" />
  <label for="tuesday">Tuesday</label><br />
  <input id="wednesday" type="checkbox" name="availability" value="wednesday" />
  <label for="wednesday">Wednesday</label>
</fieldset>
~~~~

### Implementation

Select your days of availability: Monday\
 Tuesday\
 Wednesday

![Good Technique](images/checkmark-small.png "Good Technique")Radio button {#7}
--------------------------------------------------------------------------

To make a radio button accessible you first need to attach the label to
the input element.When you have a radio button input you usually have
more than one input. (If you only have one radio button, a checkbox is
more appropriate because it gives the user the option to unselect it.)
Using the fieldset and legend helps visually identify the related group
of radio buttons plus provides a description for how they are related.
NOTE: By giving all of the radio buttons the same name it creates a
radio group where selecting one radio button unselects the others in the
group.

### Source Code

~~~~ {.code}
<fieldset>
<legend>Payment Method</legend>
<input id="cash" type="radio" name="payment" value="cash" />
<label for="cash">Cash</label><br />
<input id="check" type="radio" name="payment" value="check" />
<label for="check">Check</label><br />
<input id="credit" type="radio" name="payment" value="credit" />
<label for="credit">Credit Card</label>
</fieldset>
~~~~

### Implementation

Payment Method Cash \
 Check \
 Credit Card

![Good Technique](images/checkmark-small.png "Good Technique")Select menu, single item selection {#8}
------------------------------------------------------------------------------------------------

To make a select menu accessible you simply need to attach the label to
the input element.

### Source Code

~~~~ {.code}
<label for="color">Choose the color you want</label>
  <select id="color" name="select">
  <option value="1">Green</option>
  <option value="2">Blue</option>
  <option value="3">Red</option>
</select>
~~~~

### Implementation

Choose the color you want Green Blue Red

![Good Technique](images/checkmark-small.png "Good Technique")Select menu, multiple item selection {#9}
--------------------------------------------------------------------------------------------------

It is possible to make a menu that allows multiple selections by adding
the attribute multiple="multiple" to the select tag, **however, this can
be more difficult for some users to manipulate**.

### Source Code

~~~~ {.code}
<label for="color2">Choose the colors you want</label><br />
  <select id="color2" multiple="multiple" name="select">
  <option value="1">Green</option>
  <option value="2">Blue</option>
  <option value="3">Red</option>
</select>
~~~~

### Implementation

Choose the colors you want\
 Green Blue Red

**It is recommended to use a set of checkboxes to accomplish the same
goal.**

### Source Code

~~~~ {.code}
<fieldset>
  <legend>Choose the colors you want</legend>
  <input id="green" name="colorcheckbox" type="checkbox" value="green" /><label for="green">Green</label><br />
  <input id="blue" name="colorcheckbox" type="checkbox" value="blue" /> <label for="blue">Blue</label><br />
  <input id="red" name="colorcheckbox" type="checkbox" value="red" /> <label for="red">Red</label>
</fieldset>
~~~~

### Implementation

Choose the colors you want Green\
 Blue\
 Red

![Good Technique](images/checkmark-small.png "Good Technique")Jump menu, with "Go" button {#10}
-----------------------------------------------------------------------------------------

Many times select menus are turned into "jump menus" by executing some
JavaScript as soon as the selection has changed. This creates
accessibility issues for users because actions can be triggered
accidentally by simply tabbing or arrowing through a menu. Instead of a
jump menu, a "go" button should be used in conjunction with a select
menu to achieve the same goal.

### Source Code

~~~~ {.code}
<label for="menu">Go to the Web Site:</label>
<select id="menu" name="menu">
  <option value="http://www.ncsu.edu/" selected="">NC State University</option>
  <option value="http://accessibility.oit.ncsu.edu">NC State IT Accessibility</option>
  <option value="http://oit.ncsu.edu">Office of Information Technology</option>
</select>
<input type="button" value="GO" onclick="location= document.getElementById('menu').options[ document.getElementById('menu').selectedIndex].value;">
~~~~

Implementation

Go to the Web Site: NC State University NC State IT Accessibility Office
of Information Technology

![Good Technique](images/checkmark-small.png "Good Technique")Text area {#11}
-----------------------------------------------------------------------

To make a text area accessible you simply need to attach the label to
the input element.

### Source Code

~~~~ {.code}
<label for="feedback">Please leave your feedback:</label><br />
<textarea id="feedback" name="feedback"></textarea>
~~~~

### Implementation

Please leave your feedback:\

![Good Technique](images/checkmark-small.png "Good Technique")Button {#12}
--------------------------------------------------------------------

Buttons are inherently accessible as long as the you provide an
appropriate value attribute.

### Source Code

~~~~ {.code}
<input type="submit" name="submit" value="Submit this form" />
~~~~

### Implementation

![Good Technique](images/checkmark-small.png "Good Technique")Image buttons {#13}
---------------------------------------------------------------------------

If you use an image button make sure the alt attribute is set
appropriately.

### Source Code

~~~~ {.code}
<input type="image" name="submitbutton" src="images/submit-this-form-button.jpg" alt="Submit this form" />
~~~~

### Implementation

![Bad Technique](images/x-small.png "Bad Technique")Unlabeled input element {#14}
---------------------------------------------------------------------------

Some screen readers have built enough logic into their form parsing
algorithms to be able to make guesses at how unlabeled form elements
should be labeled. However, that logic should not be depended upon as an
excuse for poor coding practices. Explicitly attaching labels to input
elements is the only way to ensure all users will be able to correctly
identify what is being asked for in a particular input field.

### Source Code

~~~~ {.code}
<p>First Name: <input name="first-name" type="text" /></p>
~~~~

### Implementation

First Name:

![Bad Technique](images/x-small.png "Bad Technique")Automatic jump menu {#15}
-----------------------------------------------------------------------

When you set up a select menu to automatically fire an action once the
selection has changed, when keyboard-only users and screen reader users
try to read the options in the list, oftentimes the action will fire as
soon as their focus leaves the select menu, even if they did not want to
execute the action.

### Source Code

~~~~ {.code}
<label for="menu">Go to the Web Site:</label>
<select id="bad-jump-menu" name="menu" onChange="location= document.getElementById('bad-jump-menu').options[ document.getElementById('bad-jump-menu').selectedIndex].value;">
  <option value="#" selected=""></option>
  <option value="http://www.ncsu.edu/">NC State University</option>
  <option value="http://accessibility.oit.ncsu.edu">NC State IT Accessibility</option>
  <option value="http://oit.ncsu.edu">Office of Information Technology</option>
</select>
~~~~

### Implementation

Go to the Web Site: NC State University NC State IT Accessibility Office
of Information Technology

![Bad Technique](images/x-small.png "Bad Technique")Image button, no alt text {#16}
-----------------------------------------------------------------------------

If your image button does not contain alternative text in the alt
attribute, screen readers will not know what the function of the button
is.

### Source Code

~~~~ {.code}
<input type="image" name="submitbutton" src="images/submit-this-form-button.jpg" />
~~~~

### Implementation
