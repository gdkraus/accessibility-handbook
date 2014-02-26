Alternative Text Captioning Appendix A - Testing Tools

[![previous](images/left-arrow.png)Timed
Events](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/timed-events.html)

[Alternative
Text![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/alternative-text.html)

This is a demonstration on how to apply ARIA techniques to a custom UI
control, a checkbox. In reality you can and should just use a regular
checkbox when you want a checkbox on the page. This example uses a
checkbox because it provides a common UI element with simple
functionality that lets us easily demonstrate certain ARIA principles
and techniques.

Starting Point: A simple checkbox
---------------------------------

Normally when we want a checkbox we use code similar to the following to
place one on the page.

~~~~ {.code}
<input id="signup" type="checkbox" />
<label for="signup">Sign me up!</label>
~~~~

### Implementation

Sign me up!

However, for demonstration purposes, we are going to completely
reconstruct this UI element using HTML, CSS, and JavaScript, and will
apply ARIA techniques to make it accessible.

Step 1: The plain text
----------------------

To start off with, we are just going to use some plain text in a \<div\>
as the basis for our custom checkbox.

~~~~ {.code}
<div>Sign me up!</div>
~~~~

### Implementation

Sign me up!

Step 2: Introducing the "role"
------------------------------

Right now it is just plain text and does nothing special when we click
on it. There is an ARIA role for checkbox. Perhaps if we just say
role="checkbox" it will magically turn into a checkbox.

~~~~ {.code}
<div role="checkbox">Sign me up!</div>
~~~~

### Implementation

Sign me up!

Unfortunately, that doesn't take care of all of the problems. What the
ARIA role="checkbox" does is tell assistive technologies that this item
should be treated as a checkbox, however, it does not add any of the
functionality of a checkbox to the enclosing \<div\> element.

![a dog dressed in an at-at costume, one of the attack vehicles from the
Empire Strikes Back](images/dog-at-at-costume.jpg)

\<dog role="at-at"\>\</dog\> does not turn the dog into an AT-AT. [Photo
credit](https://www.facebook.com/pages/Bones-Mello-the-AT-AT-Dog/225465154180747)

Since we decided to build our own UI element instead of using the
standard browser-based one, we are 100% responsible for handling all of
the necessary user interactions necessary to make this look and behave
as a checkbox.

Step 3: Adding the checkbox
---------------------------

The first step is to add an image to make it look a little more like
checkbox.

~~~~ {.code}
<style>
.checkbox {
  background-image:url('images/checkbox-unchecked.gif');
  background-repeat: no-repeat;
  padding-left:25px;
  padding-top:10px;
}
</style>

<div role="checkbox" class="checkbox">Sign me up!</div>
~~~~

### Implementation

Sign me up!

Step 4: Storing the state of the checkbox
-----------------------------------------

Now we need some way to store the value of the ckeckbox. If it were a
standard checkbox we could just query the object to find its state with
something like

~~~~ {.code}
document.getElementById("myCheckBox").checked
~~~~

But since it's not a standard checkbox it doesn't have that property.

We could introduce a new attribute like isChecked and just query that.

~~~~ {.code}
<div role="checkbox" isChecked="false" class="checkbox">Sign me up!</div>
~~~~

But browsers and screen readers don't know what the attribute
"isChecked" means, so they wouldn't know what to do with it. Fortunately
ARIA does provide a property called aria-checked which browsers and
screen readers do know how to handle. Implementing it is very
straightforward.

~~~~ {.code}
<style>
.checkbox {
  background-image:url('images/checkbox-unchecked.gif');
  background-repeat: no-repeat;
  padding-left:25px;
  padding-top:10px;
}
</style>


<div role="checkbox" aria-checked="false" class="checkbox">Sign me up!</div>
~~~~

### Implementation

Sign me up!

Now assistive technologies like screen readers will automatically be
able to tell what the current state of the checkbox is.

Step 5: Responding to clicks
----------------------------

Of course, the checkbox still doesn't do anything. We need to make it so
when a user clicks on it it will actually appear to be checked. This is
simple with some JavaScript and CSS.

~~~~ {.code}
<style>
.checkbox {
  background-image:url('images/checkbox-unchecked.gif');
  background-repeat: no-repeat;
  padding-left:25px;
  padding-top:10px;
}
</style>

<script>
function toggleCheckBox(t) {
  if(t.getAttribute("aria-checked")=="false") {
    t.style.backgroundImage = "url('images/checkbox-checked.gif')";
    t.setAttribute("aria-checked","true");
  } else {
    t.style.backgroundImage = "url('images/checkbox-unchecked.gif')";
    t.setAttribute("aria-checked","false"); 
  }
  t.focus();
}
</script>

<div role="checkbox" aria-checked="false" class="checkbox" onclick="toggleCheckBox(this);">Sign me up!</div>
~~~~

Notice, in addition to changing the image when a user clicks on it, we
also change the value of "aria-checked". That way screen reader users
will be able to determine the new state of the checkbox.

### Implementation

Sign me up!

Step 6: Make it keyboard accessible
-----------------------------------

So far we've only implemented support for mouse actions. What if a user
cannot use a mouse? We also need to add in support for keyboard access,
just like a standard checkbox provides.

This is a two step process. First, we need to make it so the object can
receive the focus by placing it in the tab order. This is done be
setting 'tabindex="0"'. This tells the browser to allow an object which
cannot normally receive tab focus to receive it. It places the object in
the natural tab order for the page based on the structural order of the
page..

Second, we need to respond to keyboard events when users press the space
bar when focused on the checkbox. Pressing the space bar is the standard
way users toggle the state of an object in a browser.

### Source Code

~~~~ {.code}
<style>
.checkbox {
  background-image:url('images/checkbox-unchecked.gif');
  background-repeat: no-repeat;
  padding-left:25px;
  padding-top:10px;
}
</style>

<script>
function trapSpaceKey(t,e){
  if ( e.which == 32 ) {
  toggleCheckBox(t);
  }
}

function toggleCheckBox(t) {
  if(t.getAttribute("aria-checked")=="false") {
    t.style.backgroundImage = "url('images/checkbox-checked.gif')";
    t.setAttribute("aria-checked","true");
  } else {
    t.style.backgroundImage = "url('images/checkbox-unchecked.gif')";
    t.setAttribute("aria-checked","false"); 
  }
  t.focus();
}
</script>

<div role="checkbox" aria-checked="false" class="checkbox" onclick="toggleCheckBox(this);" onclick="toggleCheckBox(this);" tabindex="0">Sign me up!</div>
~~~~

### Implementation

Sign me up!

Now we have a completely custom UI element that is able to communicate
with the browser and the screen reader about its state and respond to
user interactions with the control. By placing the "role=checkbox"
attribute on the \<div\>, it didn't instantly solve all of our problems,
but what it did do was tell the browser and the screen reader that for
all practical purposes, the collection of HTML, CSS, and JavaScript that
makes up this control should be thought of as a checkbox. That way when
a screen reader user comes across it the screen reader won't just
identify it as some text with an image. It will say "checkbox, not
checked."
