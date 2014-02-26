Appendix A - Testing Tools

[![previous](images/left-arrow.png)ARIA
Landmarks](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/aria-landmarks.html)

[Tables![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/tables.html)

Page Contents {#page-contents-heading}
-------------

-   [![Bad Technique](images/x-small.png "Bad Technique")Using special
    characters to create a list](#1)
-   [![Good Technique](images/checkmark-small.png "Good Technique")Using
    list elements to create a list](#2)

It is important to use list elements when denoting a list of items. When
sighted users view a set of items like the following, it is easily to
visually discern that the relationship that exists between the items.

![Bad Technique](images/x-small.png "Bad Technique")Using special characters to create a list {#1}
---------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
* milk
* bread
* butter
* flour
~~~~

### Implementation

\* milk\
 \* bread\
 \* butter\
 \* flour

However, when a screen reader user heard this, they will hear "star
milk, star bread, star butter, star flour." To explicitly define the
relationship these items have to one another, use the \<ul\>, \<ol\>,
and \<li\> elements.

![Good Technique](images/checkmark-small.png "Good Technique")Using list elements to create a list {#2}
--------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<ul>
  <li>milk</li>
  <li>bread</li>
  <li>butter</li>
  <li>flour</li>
</ul>
~~~~

### Implementation

-   milk
-   bread
-   butter
-   flour

