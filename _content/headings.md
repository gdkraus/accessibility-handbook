ARIA Checkbox Tutorial Alternative Text Captioning Appendix A - Testing
Tools

[![previous](images/left-arrow.png)Valid
Code](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/valid-code.html)

[ARIA
Landmarks![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/aria-landmarks.html)

Page Contents {#page-contents-heading}
-------------

-   [![Good Technique](images/checkmark-small.png "Good Technique")Use
    headings to define the page structure](#1)
-   [![Good Technique](images/checkmark-small.png "Good Technique")Use
    CSS to style the headings](#2)
-   [![Good
    Technique](images/checkmark-small.png "Good Technique")General Rules
    for Applying Headings](#3)
-   [![Bad Technique](images/x-small.png "Bad Technique")Only using
    styles to denote headings](#4)

The first level of structure to add to a page is headings. Headings are
used to break up the content into a hierarchical structure much like an
outline. Where sighted users can skim a page quickly by reading the
visual headlines, a screen reader user can also skim a page by quickly
traversing the headings. To semantically define headings simply use
heading tags to label the beginning of each section.

![Good Technique](images/checkmark-small.png "Good Technique")Use headings to define the page structure {#1}
-------------------------------------------------------------------------------------------------------

This both creates a semantic structure for your page and it allows
screen reader users to be able to navigate by heading and jump from
section to section.

~~~~ {.code}
<h1>Our News Site</h1>
  <h2>World News</h2>
  <h2>National News</h2>
    <h3>Hot Topics</h3>
    <h3>Politics</h3>
  <h2>Science</h2>
    <h3>Health</h3>
    <h3>Environment</h3>
    <h3>Technology</h3>
  <h2>Entertainment</h2>
~~~~

![Good Technique](images/checkmark-small.png "Good Technique")Use CSS to style the headings {#2}
-------------------------------------------------------------------------------------------

If you don't like the way the default heading look, and most of us
don't, just use CSS to style the headings.

~~~~ {.code}
<style>
  h1 {font-size:1.4em; font-weight:bold; color:#000;}
  h2 {font-size:1.2em; font-weight:bold; color:#222;}
  h3 {font-size:1em; font-weight:bold; color:#444;}
</style>

<h1>Our News Site</h1>
  <h2>World News</h2>
  <h2>National News</h2>
    <h3>Hot Topics</h3>
    <h3>Politics</h3>
  <h2>Science</h2>
    <h3>Health</h3>
    <h3>Environment</h3>
    <h3>Technology</h3>
  <h2>Entertainment</h2>
~~~~

General Rules for Applying Headings {#3}
-----------------------------------

-   Your \<h1\> should be where the unique main content of your page
    begins, which usually means it will come after your navigation
    system.
-   It is fine if your first heading on the page is not an \<h1\>, such
    as a having an \<h2\> come before your first \<h1\>
-   You should have only 1 \<h1\> per page. If you feel you must, you
    can use a second \<h1\> for the title of your page.
-   Don’t obsess over making the first heading on your page an \<h1\>.
-   Don’t pick a heading level simply for font sizing purposes. Pick a
    level that corresponds roughly to the outline of the page.
-   It is not usually necessary to skip heading levels, going from an
    \<h1\> directly to an \<h3\>.
-   There are always exceptions to rules. Just make sure you are
    breaking the rules for a good reason.

![Bad Technique](images/x-small.png "Bad Technique")Only using styles to denote headings {#4}
----------------------------------------------------------------------------------------

Do not use stylings as the only way to communicate what your headings
are. This works for visual users, but screen reader users will not be
able to easily divide your page into logical structures.

~~~~ {.code}
<style>
  .really-big {font-size:1.4em; font-weight:bold; color:#000; margin:0;}
  .big {font-size:1.2em; font-weight:bold; color:#222; margin:0 2em;}
  .a-little-bigger {font-size:1em; font-weight:bold; color:#444; margin:0 4em;}
</style>

<p class="really-big">Our News Site</p>
  <p class="big">World News</p>
  <p class="big">National News</p>
    <p class="a-little-bigger">Hot Topics</p>
    <p class="a-little-bigger">Politics</p>
  <p class="big">Science</p>
    <p class="a-little-bigger">Health</p>
    <p class="a-little-bigger">Environment</p>
    <p class="a-little-bigger">Technology</p>
  <p class="big">Entertainment</p>
~~~~

### Implementation

Our News Site

World News

National News

Hot Topics

Politics

Science

Health

Environment

Technology

Entertainment
