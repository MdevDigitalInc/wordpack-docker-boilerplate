#:eyeglasses:HTML5 Styleguide and Best Practices

##What is it?
A series of helpful guidelines to ensure consistency across all of the code produced by Moreira Development and it's developers. The styleguide will cover things such as naming conventions ( which will cross over with SCSS ), spacing, white-space and more. Please follow these guidelines while producing code to ensure that all the code we produce is uniform.

##General Guidelines

1. Spacing and Indentation
... Always utilize 2 Spaces for indentation. Do not use Tabs or a mix of Spaces
and Tabs because it complicates Git Diff.

```html
<!-- Correct Spacing -->
<ul>
  <li>Fantastic</li>
  <li>Great</li>
</ul>

<!-- Incorrect Spacing -->
<ul>
    <li>Fantastic</li>
    <li>Great</li>
</ul>
```

2. Capitalization
... Always use lower case characters when writing html or creating css classes.

```html
<!-- Not recommended -->
<A HREF="/" Class="Some-CLASS">Home</A>

<!-- Recommended -->
<A ref="/" class="mdev-some-class">Home</A>
```

3. Trailing White Space
... Make sure to clear any trailing white space from your documents to prevent
DIFF errors in Github.

4. Document Declaration
... Always ensure you have the proper HTML5 declaration at the top, with
charset.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Title of the document</title>
  </head>

  <body>
    Content of the document......
  </body>

</html>
```

5. Code Commenting
... Provide code comments where relevant to explain or delineate sections of
code. Don't go overboard but it is nice to leave a trail for other devs.

```html
<!--[ Large Section ] -->
<!-- Don't forget to turn on the user flag... -->
```

6. Action Items
... Whenever necessary it is helpful to leave action items as comments directly
on the code.

```html
<!-- TODO: Remove icon flags from this section -->
```

7. HTML Semantics
... Use elements for what they were intended to do, bending a P element to work
like an Anchor Tag is couter to Semantic best practices.

```html
<!-- Recommended -->
<a href="recommendations/">All recommendations</a>

<!-- Not recommended -->
<div onclick="goToRecommendations();">All recommendations</div>
```

8. Multimedia Fallbacks
... Always provide fallbacks and alt tags for media elements to improve website
accessibility.

```html
<!-- Recommended -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot.">

<!-- Not recommended -->
<img src="spreadsheet.png">
```

9. `Type` attributes
... Type attributes can be ommited when the Script being loaded is JavaScript
and when the stylesheet being loaded is standard CSS.

```html
<!-- Recommended -->
<link rel="stylesheet" href="https://www.google.com/css/maia.css">

<!-- Not recommended -->
<link rel="stylesheet" href="https://www.google.com/css/maia.css"
  type="text/css">

<!-- Recommended -->
<script src="https://www.google.com/js/gweb/analytics/autotrack.js"></script>

<!-- Not recommended -->
<script src="https://www.google.com/js/gweb/analytics/autotrack.js"
  type="text/javascript"></script>
```

## General HTML Formatting Rules

1. General Formatting
... Use a new line for every block, list, or table element, and indent every
such child element.
... Independent of the styling of an element (as CSS allows elements to assume a
different role per display property), put every block, list, or table element on
a new line.

```html
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>

<ul>
  <li>Moe
  <li>Larry
  <li>Curly
</ul>

<table>
  <thead>
    <tr>
      <th scope="col">Income
      <th scope="col">Taxes
      <tbody>
        <tr>
          <td>$ 5.00
          <td>$ 4.50
</table>
```

2. Quotation Marks
... Always use Double Quotes "" when quoting attributes.

```html
<!-- Recommended -->
<a class="maia-button maia-button-secondary">Sign in</a>

<!-- Not recommended -->
<a class='maia-button maia-button-secondary'>Sign in</a>
```


## Selectors Formatting & Guidelines

1. ID's as selectors
... Whenever possible ID's should be avoided as selectors for CSS or JS.
... If you still need to use an ID make sure the name is unique and
descriptive. Keep selectors in lowercase and separated by dashes "-"

```html
<nav id="#main-nav"> </nav>
<div id="#user-main-profile" </nav>
```

2. Class Selectors
... It is always preferrable to target styles to CSS classes.
... Make sure to name your classes with semantic names in lowercase and
separated by dashes "-"

```html
<nav class="mdev-main-nav"</nav>

<div class="mdev-user-profile"></div>
```

3. JavaScript Selectors
... It is always preferrable to target JavaScript and JQuery to custom Data
Attributes on a given element. This reduces the use of unecessary ID's and keeps
the CSS namespace from being poluted.
... If you still require a CSS Class or ID for JavaScript then please follow the
naming conventions outlined below.
... As a rule of thumb the JavaScript selector naming convention always starts
with `js_` and is followed by semantic names separated by an underscore.

```html
<!-- Class JS Selector -->
<button class="js_button_selector">Click Me</button>

<!-- Data Attribute JS Selector -->
<button data-button-selector class="mdev-some-class">Click Me</button>

<!-- ID Selector - Last Resort -->
<button id="js_button_selector" class="mdev-some-class">Click Me</button>
```
