Appendix A - Testing Tools

[![previous](images/left-arrow.png)URL
Text](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/link-text-url.html)

[Finding Content in Multiple
Ways![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/find-content-multiple.html)

Page Contents {#page-contents-heading}
-------------

-   [![Bad Technique](images/x-small.png "Bad Technique")Removing the
    underline from links makes them difficult for users to visually find
    on the page](#1)

In general you do not want to remove the underline formatting from
links. Underlining links is the principal way users quickly identify
clickable links on your page. There are some cases, like links in menus,
where it may be appropriate to remove the underline styling.

![Bad Technique](images/x-small.png "Bad Technique")Removing the underline from links makes them difficult for users to visually find on the page. {#1}
--------------------------------------------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
a:link {text-decoration:none;}
a:visited {text-decoration:none;}
~~~~
