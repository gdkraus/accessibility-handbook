Overview
--------

When you use only mouse events to trigger an action, a keyboard-only
user cannot trigger the event. The solution often involves one or two
steps.

First, you need to determine if the element where you attaching the
mouse events can also receive the keyboard focus. The most common
elements which automatically receive focus are links, form input
elements, and buttons. If you are attaching the events to a different
type of element, like a generic \<div\> or \<span\>, you need to enable
the element to receive keyboard focus. This is done by adding
tabindex="0" to the element in question. This tells the browser to add
the item to the natural tab order of the page.

### Tip

tabindex can receive three types of values: -1, 0, or any number greater
than 0. Each value means something different.

tabindex="-1": This makes the element focusable, but it can only receive
focus programmatically through JavaScript. The user cannot simply press
the tab key and focus on this element.

tabindex="0": This makes the element focusable and it places the element
in the natural tab order of the page based on its position within the
DOM. The user will be able to focus on this item using the tab key.

tabindex="1", or anything greater than 0: This makes the element
focusable, but it places the element in the tab order corresponding to
the number set in the attribute. **This practice should be avoided
except in rare cases.** The tab order should almost always follow the
natural order of the page.

Second, provide the same functionality via the corresponding keyboard
events. The following table lists mouse events and their equivalent
keyboard events.

  Mouse Event   Keyboard Event
  ------------- ----------------
  mousedown     keydown
  mouseup       keyup
  click         keypress
  mouseover     focus
  mouseout      blur

  : Corresponding mouse and keyboard events

### Tip

Oftentimes it is easier to put all of the code in a third function
rather than storing it in an event listener so that both the mouse and
keyboard event can just call the same function. That way you only have
to maintain your code in a single location.

    onMouseover = "doSomething();"
    onfocus = "doSomething();"

    function doSomething() {alert('Hello World!');}

Further Reading
---------------

-   [WCAG 2.0 Techniques for using both keyboard and other
    device-specific
    functions.](http://www.w3.org/TR/WCAG20-TECHS/SCR20.html)

