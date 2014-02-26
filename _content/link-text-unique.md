Appendix A - Testing Tools

[![previous](images/left-arrow.png)Length of Link
Text](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/link-text-length.html)

[URL
Text![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/link-text-url.html)

Page Contents {#page-contents-heading}
-------------

-   [![Good
    Technique](images/checkmark-small.png "Good Technique")Hidden link
    text](#1)
-   [![Good Technique](images/checkmark-small.png "Good Technique")Link
    as a Child of a Unique Parent Element](#2)
-   [![Bad Technique](images/x-small.png "Bad Technique")Link text found
    outside the context of a descriptive element](#3)
-   [![Good Technique](images/checkmark-small.png "Good Technique")Link
    as a Child of a Unique Heading](#4)
-   [![Good Technique](images/checkmark-small.png "Good Technique")Link
    as a Child of a Unique List Item](#5)

The link text should be unique among all of the links on the page, or
alternatively the unique function of the link should be able to be
determined from the link’s context. This helps in determining what a
link's function is and differentiating it among similar links. **If it
is necessary to have multiple links on the same page with the same link
text** there are a number of ways to address this problem.

![Good Technique](images/checkmark-small.png "Good Technique")The visible link text is not descriptive enough and might not be unique from other links on a page. The hidden text will be read by screen readers to give them enough context to discern the function of the link. {#1}
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
.offscreen {
position:absolute;
left:-999px;
width:1px;
height:1px;
top:auto;
}

<p><a href="#">Read more <span class="offscreen">About NC State</span></a></p>
~~~~

### Implementation

[Read more About NC State](#)

![Good Technique](images/checkmark-small.png "Good Technique")Link text found within the context of a descriptive parent element {#2}
--------------------------------------------------------------------------------------------------------------------------------

This demonstrates the correct implementation where the non-unique or
non-fully-descriptive text is found within the scope of the unique
and/or fully-descriptive text. The \<a\> is a child of the descriptive
\<p\>.

### Source Code

~~~~ {.code}
<p>How should you display the parts of a form that are read-only? There are three main implementations that I have seen, and unfortunately the accessible version is the one I’ve seen used the least. <a href="file.html">[Read more...]</a></p>
~~~~

### Implementation

How should you display the parts of a form that are read-only? There are
three main implementations that I have seen, and unfortunately the
accessible version is the one I’ve seen used the least. [[Read
more...]](file.html)

![Bad Technique](images/x-small.png "Bad Technique")Link text found outside the context of a descriptive element {#3}
----------------------------------------------------------------------------------------------------------------

This demonstrates the **incorrect** implementation where the non-unique
or non-fully-descriptive text is found outside the scope of the unique
and/or fully-descriptive text. The \<a\> is a sibling of the descriptive
\<p\>

### Source Code

~~~~ {.code}
<p>How should you display the parts of a form that are read-only? There are three main implementations that I have seen, and unfortunately the accessible version is the one I’ve seen used the least.</p>
<p><a href="file.html">[Read more...]</a></p>
~~~~

### Implementation

How should you display the parts of a form that are read-only? There are
three main implementations that I have seen, and unfortunately the
accessible version is the one I’ve seen used the least.

[[Read more...]](file.html)

![Good Technique](images/checkmark-small.png "Good Technique")Link text paired with the text of the immediately preceding heading, forming a uniquely identifiable context. {#4}
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This demonstrates the **correct** implementation where the link text is
paired with the unique text of the immediate parent heading. This allows
the unique function of the link to be determined.

### Source Code

    <h5>Annual Report 2007-2008</h5>
      <p>
        <a href="annrep0708.html">(HTML)</a>&nbsp;
        <a href="annrep0708.pdf">(PDF)</a>&nbsp;
        <a href="annrep0708.rtf">(RTF)</a>
      </p>
      
    <h5>Annual Report 2006-2007</h5>
      <p> 
        <a href="annrep0607.html">(HTML)</a>&nbsp;
        <a href="annrep0607.pdf">(PDF)</a>&nbsp;
        <a href="annrep0607.rtf">(RTF)</a>
      </p>

### Implementation

##### Annual Report 2007-2008

[(HTML)](annrep0708.html)  [(PDF)](annrep0708.pdf) 
[(RTF)](annrep0708.rtf)

##### Annual Report 2006-2007

[(HTML)](annrep0607.html)  [(PDF)](annrep0607.pdf) 
[(RTF)](annrep0607.rtf)

![Good Technique](images/checkmark-small.png "Good Technique")Link text paired with the text of the immediately preceeding parent list item, forming a uniquely identifiable context. {#5}
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This demonstrates the **correct** implementation where the link text is
paired with the unique text of the immediate parent list item. This
allows the unique function of this link to be determined.

### Source Code

~~~~ {.code}
<ul>
  <li>Annual Report 2005-2006
  <ul>
    <li><a  href="annrep0506.html">(HTML)</a></li>
    <li><a  href="annrep0506.pdf">(PDF)</a></li>
    <li><a  href="annrep0506.rtf">(RTF)</a></li>
  </ul>
  </li>
  <li>Annual Report 2006-2007
  <ul>
    <li><a  href="annrep0607.html">(HTML)</a></li>
    <li><a  href="annrep0607.pdf">(PDF)</a></li>
    <li><a  href="annrep0607.rtf">(RTF)</a></li>
  </ul>
  </li>
</ul>
~~~~

### Implementation

-   Annual Report 2005-2006
    -   [(HTML)](annrep0506.html)
    -   [(PDF)](annrep0506.pdf)
    -   [(RTF)](annrep0506.rtf)

-   Annual Report 2006-2007
    -   [(HTML)](annrep0607.html)
    -   [(PDF)](annrep0607.pdf)
    -   [(RTF)](annrep0607.rtf)


