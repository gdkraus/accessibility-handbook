Making a site's menu accessible has two basic principles.

-   Make sure the menus, including submenus, can be accessed using only
    the keyboard.
-   Make sure the visual focus can always be seen when navigating the
    menu with a keyboard.

There are multiple ways to implement menus accessibly, some of which may
require additional work. Menu functionality can be broken down into two
categories, managed focus and non-managed focus.

-   The menu can be completely navigated using only the tab and
    shift-tab keys. (non-managed focus)
-   The menu is navigated using a combination of tab, shift-tab, and
    arrow keys. (managed focus)

The principal difference is in determining how keyboard events are going
to be handled. Non-managed means the browser takes care of controlling
the flow of keyboard focus through the menu, and managed means you are
responsible for controlling the flow of the keyboard focus through the
menu.

Non-Managed Focus Menus
-----------------------

The browser might provide all of the functionality you need in order to
successfully navigate your menu. The browser already makes the tab and
shift-tab keys move to the next and previous links respectively. If your
menu system can be navigated using only those two key combinations, in
conjunction with pressing return to activate a link, then no additional
work is needed. The user will simply see the menu system as a linear
collection of links in a nested list that they can move backward and
forward through. In this case the relationship that a menu item has with
its siblings and parent and child menu items is determined through the
list nesting.

A popular example of a non-managed focus menu is the jQuery-based
[Superfish](http://users.tpg.com.au/j_birch/plugins/superfish/).

Another menu example is [drop-down menu from Simply
Accessible](http://simplyaccessible.com/examples/css-menu/option-6/).

Managed Focus Menus
-------------------

If you want to use the arrow keys to navigate you menu and submenu, you
must trap the keyboard events and translate those events into moving the
focus through the menu system. The browser will not automatically
translate the down arrow as meaning to go to the next menu item. You
must handle that action yourself. By default, if you press the down
arrow, the browser will simply try to scroll the page down.

By utilizing the arrow keys, you could form a more complex structure and
provide some additional semantics to your menu so the user would know if
a particular item was a sub-menu item of another item. In other words,
you could begin to describe the structure of your menu. For example, the
left and right arrows could move across the top level menu items in a
horizontal menu, and the down arrows could open a submenu beneath each
menu item. Using this technique also requires using ARIA attributes to
describe the relationships.

A popular managed focus menu is from
[jQueryUI](http://hanshillen.github.com/jqtest/?tabid=dialog#goto_menubar).

Another managed focus menu that is also accessible is from the [Open
Ajax Alliance](http://oaa-accessibility.org/examplep/menubar1/)

Menus That Contain More Than Links
----------------------------------

All of the above are good techniques if you have simple menus and
submenus that only contain links. Some menus, often referred to as "Mega
Menus" contain many other types of objects like images, headings, and
paragraphs. These can be very difficult to make fully accessible. You
could make the case that these types of menus have moved beyond simple
menus and are more in the realm of tabs and tabpanels.

ARIA techniques can help to make menus with submenus more accessible.

Further Reading
---------------

-   [Terrill Thomson blog post on accessible drop down
    menus](http://terrillthompson.com/blog/202)

