Appendix A - Testing Tools

[![previous](images/left-arrow.png)Basics
Overview](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/basics-overview.html)

[Valid
Code![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/valid-code.html)

Page Contents {#page-contents-heading}
-------------

-   [![Good
    Technique](images/checkmark-small.png "Good Technique")Defining the
    language for an HTML5 or HTML 4 document](#1)
-   [![Good
    Technique](images/checkmark-small.png "Good Technique")Defining the
    language for an XHTML document](#2)
-   [![Good
    Technique](images/checkmark-small.png "Good Technique")Defining
    multiple languages within a document with one predominant
    language](#3)
-   [![Good
    Technique](images/checkmark-small.png "Good Technique")Defining
    multiple languages within a document with the quantity of each
    language being roughly equally](#4)
-   [![Bad Technique](images/x-small.png "Bad Technique")Not defining
    the language of the document](#5)
-   [![Bad Technique](images/x-small.png "Bad Technique")Simply defining
    the language of the doctype](#6)

Defining the language of the document allows the following.

-   Text-to-speech engines, like screen readers, know how to read the
    text
-   Spell checkers know what language to use
-   Text styling

Here is a demonstration of how a screen reader user experiences a
document without language attributes.

![Good Technique](images/checkmark-small.png "Good Technique")Defining the language for an HTML5 or HTML 4 document {#1}
-------------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<html lang="en-US">
~~~~

![Good Technique](images/checkmark-small.png "Good Technique")Defining the language for an XHTML document {#2}
---------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<html lang="en" xml:lang="en" xmlns= "http://www.w3.org/1999/xhtml">
~~~~

![Good Technique](images/checkmark-small.png "Good Technique")Defining multiple languages within a document with one predominant language {#3}
-----------------------------------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <title>Welcome - Bienvenue</title> 
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>Lots of text in English...</p>
    <p lang="fr">Une petite quantité de texte en français...</p>
  </body> 
</html>
~~~~

![Good Technique](images/checkmark-small.png "Good Technique")Defining multiple languages within a document with the quantity of each language being roughly equally {#4}
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Welcome - Bienvenue</title> 
  </head> 
  <body> 
    <div lang="en"> 
      <h1>Welcome!</h1> 
      <p>Lots of text in English...</p> 
    </div> 
    <div lang="fr"> 
      <h1>Bienvenue !</h1> 
      <p>Beaucoup de texte en français...</p> 
    </div> 
  </body> 
</html>
~~~~

![Bad Technique](images/x-small.png "Bad Technique")Not defining the language of the document. {#5}
----------------------------------------------------------------------------------------------

If you do not define the language of the page, the user agent will
default to using its own default language setting for rendering the
page. If both the page and the user agent are in the same language
everything will work fine, however, if for instance the user agent is
set up for English and the page is in French, a user agent such as a
screen reader will attempt to speak the French text like a bad American
tourist.

### Source Code

~~~~ {.code}
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Welcome - Bienvenue</title> 
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>Lots of text in English...</p>
    <p>Une petite quantité de texte en français...</p>
  </body> 
</html>
~~~~

![Bad Technique](images/x-small.png "Bad Technique")Simply defining the language of the doctype. {#6}
------------------------------------------------------------------------------------------------

Defining the language in the doctype declaration simply defines the
language of the doctype schema, not the language of the page itself. You
must also define the language of the page using one of the previous
techniques.

### Source Code

~~~~ {.code}
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
~~~~

Further Reading
---------------

For more information, please refer to the [W3C documentation on
specifying
languages](http://www.w3.org/TR/2007/NOTE-i18n-html-tech-lang-20070412/#ri20050208.095812479),
from which these examples were created.
