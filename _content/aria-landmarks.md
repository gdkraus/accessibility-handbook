Appendix A - Testing Tools

[![previous](images/left-arrow.png)Headings](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/headings.html)

[Lists![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/lists.html)

ARIA landmarks are attributes you can add to elements in your page to
define areas like the main content or a navigation region. The possible
landmarks are as follows.

-   **banner** = contains the site-oriented content of each page, like
    the logo, usually located at the top of the page. There should only
    be one banner landmark per page.
-   **complementary** = a section of content that complements the main
    content but also retains its meaning when separated from the main
    content
-   **contentinfo** = contains content usually found in the footer of a
    page, like copyright and privacy statements. There should only be
    one contentinfo landmark per page.
-   **form** = contains form input elements which can be edited and
    submitted by the user
-   **main** = the main content of the page. There should only be one
    main landmark per page.
-   **navigation** = a collection of navigation links to navigate the
    site or page
-   **search** = a search tool
-   **application** = represents a unique software unit, and keyboard
    commands are handled by the application rather than the browser
    itself. This role should be used sparingly.

When you define parts of your page with these roles, it allows screen
reader user the ability to easily jump from one section to another and
know where they are going. For example, we often code our main menu like
the following.

~~~~ {.code}
<div id="nav">
  <ul>
    <li>Home</li>
    <li>Products</li>
    <li>Support</li>
  </ul>
</div>
~~~~

When screen reader users encounter something like this they will hear a
collection of links and have to intuit from the context that it is the
main menu. Perhaps if they hear it read near the top of the page they
can guess it is the main navigation for the page. However, with ARIA
landmarks we can provide semantic information about the navigation area.
By adding the attribute role=”navigation” to the containing \<div\>, we
are marking this as a navigation region.

~~~~ {.code}
<div id="nav" role="navigation">
  <ul>
    <li>Home</li>
    <li>Products</li>
    <li>Support</li>
  </ul>
</div>
~~~~

In this case the screen reader user will hear something like "navigation
landmark."

**You should not place the "role" attribute on another element that
already has semantic meaning, like a \<ul\>. It should only be placed on
\<div\> and \<span\> elements.** While the specification allows you to
place the "role" attribute on other types of elements, poor screen
reader support necessitates placing the role attribute on an element
with out semantic meaning. If you place the "role" attribute on
something like a \<ul\>, most screen readers will override the element's
native role with the specified one. NVDA is the only screen reader at
the time of testing that implements this functionality correctly.

aria-label
----------

We can take this a step further and describe this navigation region
using the aria-label attribute. aria-label is a description that is
never displayed on screen but is relayed to the screen reader user. This
can be very helpful if you have multiple navigation areas within a
single page.

~~~~ {.code}
<div id="nav" role="navigation" aria-label="main navigation">
  <ul>
    <li>Home</li>
    <li>Products</li>
    <li>Support</li>
  </ul>
</div>
        
<div id="nav" role="navigation" aria-label="product navigation">
  <ul>
    <li>Product Description</li>
    <li>Technical Specifications</li>
    <li>Customer Reviews</li>
  </ul>
</div>
~~~~

In this case the screen reader user will hear something like "navigation
landmark, main navigation", then "navigation landmark, product
navigation"

aria-labelledby
---------------

Another option for labeling an ARIA landmark is to use the
aria-labelledby attribute. The aria-labelledby attribute is used when a
particular landmark can be labelled by another on-screen element. You
just list the id for the item that labels that landmark.

~~~~ {.code}
<div role="navigation" aria-labelledby="nav-heading">
  <h2 id="nav-heading">Learn About This Product</h2>
  <ul>
    <li>Product Description</li>
    <li>Technical Specifications</li>
    <li>Customer Reviews</li>
  </ul>
</div>
~~~~

In this case the screen reader user will hear something like "navigation
landmark, learn about this product."

Full Implementation of ARIA Landmarks
-------------------------------------

This demonstrates a simple Web page with most of the ARIA landmarks
implemented. The application landmark is not demonstrated because it is
used in specialized situations.

~~~~ {.code}
<div role="banner">banner</div>
<div id="left-column">
  <div role="navigation">
    <ul>
      <li><a href="#">Nav link #1</a></li>
      <li><a href="#">Nav link #2</a></li>
      <li><a href="#">Nav link #3</a></li>
      <li><a href="#">Nav link #4</a></li>
    </ul>
  </div>
</div>
<div id="center-column">
  <div role="main">
    <p&gtThis is a tutorial on using ARIA Landmarks. Here are the steps you need to take to implement ARIA Landmarks on your site...</p>
  </div>
</div>
<div id="right-column">
  <div role="complementary">
    <h2>ARIA and Validation</h2>
    <p>If you add any ARIA attributes to your page it may cause your code to not validate against the <a href="http://validator.w3.org/">W3C Validation Service</a>. Even though it is frequently said that pages must validate in order to be accessible, this is one exception to that rule. In fact, by adding these non-validating attributes you will be making your page more accessible.</p>
  </div>
  <div role="form">
    <form id="form1" name="form1" method="post" action="">
      <p><label for="firstName">First Name</label><input type="text" name="firstName" id="firstName" /></p>
      <p><label for="lastName">Last Name</label><input type="text" name="lastName" id="lastName" /></p>
      <p><label for="email">Email Address</label><input type="text" name="email" id="email" /></p>
      <p><input type="submit" name="submit" id="submit" value="Submit" /></p>
    </form>
  </div>
  <div role="search">
    <form id="form2" name="form2" method="post" action="">
    <p><label for="search-phrase">Search for: </label><input type="text" name="search-phrase" id="search-phrase" /></p>
    <p><input type="submit" name="submit" id="submit" value="Submit" /></p>
    </form>
  </div>
</div>
<div role="contentinfo">
  <p><a href="#">Legal</a></p>
  <p><a href="#">Privacy Policy</a></p>
</div>
~~~~

ARIA and HTML5
--------------

HTML5 introduces many new elements, several of which correspond to, or
at least are similar to the ARIA attributes. Do you still need to use
ARIA attributes like "navigation" if you use the if you use the \<nav\>
element? At this point the browser and screen reader support is not
strong enough to depend on only the HTML5 semantics to convey the
meaning, so you should still use ARIA attributes in HTML5, even when the
HTML5 element could potentially convey the same meaning.

~~~~ {.code}
<nav role="navigation"></nav>
~~~~

The following table shows how ARIA landmarks should be applied to HTML5
Elements

  ARIA Landmark   HTML5 Element
  --------------- --------------------------------------
  banner          \<header\>
  complementary   \<aside\>
  contentinfo     generic \<div\> acting as the footer
  form            \<form\> or generic \<div\>
  main            \<main\>
  navigation      \<nav\>
  search          \<form\> or generic \<div\>
  application     generic \<div\>

  : ARIA landmarks and their corresponding HTML5 elements

Further Reading
---------------

-   [Using WAI-ARIA Landmarks – 2013 from the Paciello
    Group](http://www.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013#table1/)
-   [HTML5 Accessibility](http://www.html5accessibility.com/)

