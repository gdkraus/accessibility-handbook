Appendix A - Testing Tools

[![previous](images/left-arrow.png)Lists](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/lists.html)

[Mouse and Keyboard
Events![next](images/right-arrow.png)](http://accessibility.oit.ncsu.edu/training/accessibility-handbook/mouse-and-keyboard-events.html)

Page Contents {#page-contents-heading}
-------------

-   [![Good Technique](images/checkmark-small.png "Good Technique")A
    simple data table with column and row headings](#1)
-   [![Good Technique](images/checkmark-small.png "Good Technique")A
    complex data table using header and id attributes](#2)
-   [![Good Technique](images/checkmark-small.png "Good Technique")A
    layout table](#3)
-   [![Bad Technique](images/x-small.png "Bad Technique")A data table
    with no headings, but using bold text to mimic headings](#4)
-   [![Bad Technique](images/x-small.png "Bad Technique")A layout table
    with a summary attribute](#5)

Overview
--------

Tables are primarily used to present tabular information, however,
tables are also still used for creating layouts. While WCAG does not
prohibit the use of tables for layouts, it encourages developers to use
CSS instead.

Tables used to display tabular information can be divided into two
groups - simple layouts and complex layouts. Simple layouts have a
single row of headers at the top of the table and/or a single column of
headers on the left side of the table. Additionally, there are no merged
cells within the table. Complex data tables have either multiple rows or
columns of headers, contain merged cells, or contain blank rows or
columns for visual effect.

Additionally, data tables must also have a caption or a summary.

Caption
-------

The caption element identifies the table. It can be thought of as a
title or a heading for a table.

~~~~ {.code}
<table>
  <caption>Schedule for the week of March 6</caption>
  <tr>
    <th scope="col">State & First</th>
    <th scope="col">State & Sixth</th>
    <th scope="col">State & Fifteenth</th>
    <th scope="col">Fifteenth & Morrison</th>
  </tr>
  <tr>
    <td>4:00</td>
    <td>4:05</td>
    <td>4:11</td>
    <td>4:19</td>
  </tr>
  …

</table>
            
~~~~

Summary
-------

The summary can perform two different functions. It is allowable to have
the summary perform both functions at the same time.

-   it can describe the layout of the table to help screen reader users
    know how to navigate the table
-   it can describe in narrative form what information the table is
    trying to convey

~~~~ {.code}
<table summary="Schedule for Route 7 going downtown. Service begins 
at 4:00 AM and ends at midnight. Intersections are listed in the top row. 
Find the intersection closest to your starting point or destination, then read 
down that column to find out what time the bus leaves that intersection.">
  <tr>
    <th scope="col">State & First</th>
    <th scope="col">State & Sixth</th>
    <th scope="col">State & Fifteenth</th>
    <th scope="col">Fifteenth & Morrison</th>
  </tr>
  <tr>
    <td>4:00</td>
    <td>4:05</td>
    <td>4:11</td>
    <td>4:19</td>
  </tr>
  …
</table>
~~~~

![Good Technique](images/checkmark-small.png "Good Technique")A simple data table with column and row headings {#1}
--------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<table border="1" summary="Pizza sizes are listed in the first row. Types of pizza are listed in the first column. Cross-reference them to determine the price of the pizza.">
  <caption>Pizza Prices</caption>
  <tr>
    <th scope="col">&nbsp;</th>
    <th scope="col">Small</th>
    <th scope="col">Medum</th>
    <th scope="col">Large</th>
  </tr>
  <tr>
    <th scope="row">Cheese</th>
    <td>$8</td>
    <td>$10</td>
    <td>$12</td>
  </tr>
  <tr>
    <th scope="row">Veggie</th>
    <td>$10</td>
    <td>$12</td>
    <td>$14</td>
  </tr>
  <tr>
    <th scope="row">Pepperoni</th>
    <td>$10</td>
    <td>$12</td>
    <td>$14</td>
  </tr>
</table>
~~~~

### Implementation

Pizza Prices

 

Small

Medum

Large

Cheese

\$8

\$10

\$12

Veggie

\$10

\$12

\$14

Pepperoni

\$10

\$12

\$14

![Good Technique](images/checkmark-small.png "Good Technique")A complex data table using header and id attributes {#2}
-----------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<table border="1" summary="Pizza toppings are listed in the first two rows. Sizes of pizza are listed in the first column. Cross reference them to determine the price of each topping.">
  <caption>Topping Prices</caption>
  <tr>
    <th scope="col">&nbsp;</th>
    <th colspan="3" scope="col" id="meat">Meat Toppings</th>
    <th colspan="3" scope="col" id="veg">Vegetable Toppings</th>
  </tr>
  <tr>
    <th scope="col">&nbsp;</th>
    <th scope="col" id="pep">Pepperoni</th>
    <th scope="col" id="sa">Sausage</th>
    <th scope="col" id="bac">Bacon</th>
    <th scope="col" id="on">Onion</th>
    <th scope="col" id="ol">Olives</th>
    <th scope="col" id="tom">Tomato</th>
  </tr>
  <tr>
    <th scope="row" id="sm">Small</th>
    <td headers="meat pep sm">$0.80</td>
    <td headers="meat sa sm">$0.80</td>
    <td headers="meat bac sm">$1.00</td>
    <td headers="veg on sm">$0.60</td>
    <td headers="veg ol sm">$0.80</td>
    <td headers="veg tom sm">$0.60</td>
  </tr>
  <tr>
    <th scope="row" id="med">Medium</th>
    <td headers="meat pep med">$1.00</td>
    <td headers="meat sa med">$1.00</td>
    <td headers="meat bac med">$1.20</td>
    <td headers="veg on med">$0.80</td>
    <td headers="veg ol med">$1.00</td>
    <td headers="veg tom med">$0.80</td>
  </tr>
  <tr>
    <th scope="row" id="lg">Large</th>
    <td headers="meat pep lg">$1.20</td>
    <td headers="meat sa lg">$1.20</td>
    <td headers="meat bac lg">$1.40</td>
    <td headers="veg on lg">$1.00</td>
    <td headers="veg ol lg">$1.20</td>
    <td headers="veg tom lg">$1.00</td>
  </tr>
</table>
~~~~

### Implementation

Topping Prices

 

Meat Toppings

Vegetable Toppings

 

Pepperoni

Sausage

Bacon

Onion

Olives

Tomato

Small

\$0.80

\$0.80

\$1.00

\$0.60

\$0.80

\$0.60

Medium

\$1.00

\$1.00

\$1.20

\$0.80

\$1.00

\$0.80

Large

\$1.20

\$1.20

\$1.40

\$1.00

\$1.20

\$1.00

![Good Technique](images/checkmark-small.png "Good Technique")A layout table {#3}
----------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<table width="100%" border="0">
  <tr>
    <td colspan="2" bgcolor="#c00"><h1 style="color:#fff">Website Logo</h1></td>
  </tr>
  <tr>
    <td width="20%" valign="top" bgcolor="#ccc">
      <a href="#">Menu link</a><br>
      <a href="#">Menu link</a><br>
      <a href="#">Menu link</a><br>
      <a href="#">Menu link</a><br>
      <a href="#">Menu link</a>
    </td>
    <td width="80%" valign="top" bgcolor="#fff">
      <h1>Welcome to our great site!</h1>
      <p>Come find out about all of the great things we do here at our company!</p>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center" height="20" bgcolor="#000"><p style="color:#fff">Contact Info</p></td>
  </tr>
</table>
~~~~

### Implementation

Website Logo
============

[Menu link](#)\
 [Menu link](#)\
 [Menu link](#)\
 [Menu link](#)\
 [Menu link](#)

Welcome to our great site!
==========================

Come find out about all of the great things we do here at our company!

Contact Info

![Bad Technique](images/x-small.png "Bad Technique")A data table with no headings, but using bold text to mimic headings {#4}
------------------------------------------------------------------------------------------------------------------------

### Source Code

~~~~ {.code}
<table border="1">
  <tr>
    <td>&nbsp;</td>
    <td style="font-weight:bold">Small</td>
    <td style="font-weight:bold">Medum</td>
    <td style="font-weight:bold">Large</td>
    </tr>
  <tr>
    <td style="font-weight:bold">Cheese</td>
    <td>$8</td>
    <td>$10</td>
    <td>$12</td>
  </tr>
  <tr>
    <td style="font-weight:bold">Veggie</td>
    <td>$10</td>
    <td>$12</td>
    <td>$14</td>
  </tr>
  <tr>
    <td style="font-weight:bold">Pepperoni</td>
    <td>$10</td>
    <td>$12</td>
    <td>$14</td>
  </tr>
</table>
~~~~

### Implementation

  ----------- ------- ------- -------
              Small   Medum   Large
  Cheese      \$8     \$10    \$12
  Veggie      \$10    \$12    \$14
  Pepperoni   \$10    \$12    \$14
  ----------- ------- ------- -------

![Bad Technique](images/x-small.png "Bad Technique")A layout table with a summary attribute {#5}
-------------------------------------------------------------------------------------------

When you add the summary attribute to a layout table, screen reader
users will have the summary attribute read to them. This is unnecessary
and more cumbersome to the user. It is better to simply leave the
summary attribute and caption element off.

### Source Code

~~~~ {.code}
<table width="100%" border="0" summary="a layout table">
  <tr>
    <td colspan="2" bgcolor="#c00"><h1 style="color:#fff">Website Logo</h1></td>
  </tr>
  <tr>
    <td width="20%" valign="top" bgcolor="#ccc">
      <a href="#">Menu link</a><br>
      <a href="#">Menu link</a><br>
      <a href="#">Menu link</a><br>
      <a href="#">Menu link</a><br>
      <a href="#">Menu link</a>
    </td>
    <td width="80%" valign="top" bgcolor="#fff">
      <h1>Welcome to our great site!</h1>
      <p>Come find out about all of the great things we do here at our company!</p>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center" height="20" bgcolor="#000"><p style="color:#fff">Contact Info</p></td>
  </tr>
</table>
~~~~

### Implementation

Website Logo
============

[Menu link](#)\
 [Menu link](#)\
 [Menu link](#)\
 [Menu link](#)\
 [Menu link](#)

Welcome to our great site!
==========================

Come find out about all of the great things we do here at our company!

Contact Info

Further Reading
---------------

-   [WebAIM: Creating Accessible
    Tables](http://webaim.org/techniques/tables/)
-   [W3C: Summary Attribute
    Technique](http://www.w3.org/TR/WCAG20-TECHS/H73.html)
-   [W3C: Correctly Making Layout
    Tables](http://www.w3.org/TR/WCAG20-TECHS/F46.html)
-   [W3C: Table Header and ID
    Attributes](http://www.w3.org/TR/WCAG20-TECHS/H43.html)
-   [W3C: Presenting Tabular
    Information](http://www.w3.org/TR/WCAG20-TECHS/H51.html)
-   [W3C: Table Scope
    Attribute](http://www.w3.org/TR/WCAG20-TECHS/H63.html)

