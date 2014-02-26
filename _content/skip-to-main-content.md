Page Contents {#page-contents-heading}
-------------

-   [![Good
    Technique](images/checkmark-small.png "Good Technique")Having a skip
    to main content link appear when it receives keyboard focus](#1)

When keyboard-only users interact with your site they use the tab key to
jump from link to link. If you have a lot of links at the first of your
page in your header or in a menu, they must tab through those every time
they come to a new page just to get to the main content. Providing a
skip to main content link allows them to easily bypass this.

Note: These techniques are also sometimes referred to as "skip
navigation links".

Here is a demonstration of what keyboard-only users must do to navigate
a page without a skip to main content link.

![Good Technique](images/checkmark-small.png "Good Technique")Having a skip to main content link appear when it receives keyboard focus
---------------------------------------------------------------------------------------------------------------------------------------

The text is hidden offscreen in a manner that allows screen reader users
to interact with it.

### Source Code

~~~~ {.code}
a.skip-main {
    left:-999px;
    position:absolute;
    top:auto;
    width:1px;
    height:1px;
    overflow:scroll;
    z-index:-999;
}
a.skip-main:focus, a.skip-main:active {
    color: #fff;
    background-color:#000;
    left: auto;
    top: auto;
    width: 30%;
    height: auto;
    overflow:auto;
    margin: 10px 35%;
    padding:5px;
    border-radius: 15px;
    border:4px solid yellow;
    text-align:center;
    font-size:1.2em;
    z-index:999;
}
            
<a class="skip-main" href="#main">Skip to main content</a>
<h1>Skip to Main Content - Keyboard Accessible</h1>
<ul>
  <li><a href="#">Nav Item 1</a></li>
  <li><a href="#">Nav Item 2</a></li>
  <li><a href="#">Nav Item 3</a></li>
  <li><a href="#">Nav Item 4</a></li>
</ul>
<p id="main">This is the main content. In this example you will note that the &quot;Skip to main content&quot; link appears when I tab through the page. This allows keyboard-only users, in addition to screen reader users, an easy way to skip repetitive navigation. The key components to implementing this are</p>
<ol>
  <li>provide a link at the top of the page that says "skip to main content"</li>
  <li>have it link to an internal anchor further down in the page where the main content begins.</li>
  <li>use CSS :focus and :activate to make the skip link visible when the user tabs to it</li>
</ol>
~~~~

### Implementation

View the [skip to main content
implementation](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/skip-to-main-content-keyboard-accessible.html)
on another page.
