# :art:SCSS Styleguide

## What is it?
A series of helpful guidelines to ensure consistency across all of the code produced by Moreira Development and it's developers. The styleguide will cover things such as naming conventions ( which will cross over with SCSS ), spacing, white-space and more. Please follow these guidelines while producing code to ensure that all the code we produce is uniform.

## General Guidelines

1. Spacing and Indentation
... Always utilize 2 Spaces for indentation. Do not use Tabs or a mix of Spaces
and Tabs because it complicates Git Diff.

```scss
/* Correct Spacing */
.mdev-some-class {
  width: 10px;
  height: 10px;

  .mdev-some-child-class {
    color: black;
    overflow: visible;
  }
}

/* Not Correct Spacing */
.mdev-some-class {
    width: 10px;
    height: 10px;

    .mdev-some-child-class {
      color: black;
      overflow: visible;
   }
}
```

2. Capitalization
... Always use lower case characters when writing html or creating css classes.

```scss
/* Not recommended */
.mdev-some-class { ... }

/* Recommended */
.Mdev-SOME-CLASS { ... }
```

3. Trailing White Space
... Make sure to clear any trailing white space from your documents to prevent
DIFF errors in Github.

4. Code Commenting
... Provide code comments where relevant to explain or delineate sections of
code. Don't go overboard but it is nice to leave a trail for other devs.

```scss
/* [ New Section Start ] -------------- */
.mdev-some-class { ... }

.mdev-some-other-related-class { ... }

.some-magic-class {
  /* used magic number to fix the layout do not change */
  width: 43.332%
}
```

5. Action Items
... Whenever necessary it is helpful to leave action items as comments directly
on the code.

```scss
/* TODO: Abstract buttons into mixin */

/* TODO: ------------------------------

- Remove deprecated variables
- Add mixins to buttons
- Fix padding issue on nav

--------------------------------------*/
```

7. SCSS Semantics
... Use descriptive names that make sense for what the class purpose is. Keep it to consise, semantic lower case names separated by dashes "-".

```scss
.mdev-main-navigation { ... }

.mdev-main-footer { ... }

.mdev-profile-section {
  position: relative;
  width: 80%;

  .mdev-profile-picture { ... }

  .mdev-profile-select { ... }

}
```

8. SCSS Quotations
... When using quotations for URL's and other attributes in SCSS sheets please use SINGLE QUOTES

```scss
.some-other-class {
  background: url('http:some.image/url');
}
```

## Selectors Units & Prefixes

1. HTML Element Selectors
... It is best to avoid using naked top level HTML elements such as P or TABLE as CSS selectors. They tend to have an incredibly low specificity and will bleed over on the whole markup.
... It is always best to use Class selectors. The only time you should be using base HTML selectors is for Resets or site wide styles for Forms.

```scss
/* Avoid Using */
p { ... }

table { ... }

/* When necessary... */

.mdev-some-class p { ... }

.mdev-some-parent {
  p { ... }

  table { ... }
}
```

2. ID's as selectors
... Whenever possible ID's should be avoided as selectors for CSS because they are difficult to override at times.
... If you still need to use an ID make sure the name is unique and
descriptive. Keep selectors in lowercase and separated by dashes "-"

```scss
#main-nav { ... }

#main-footer { ... }

#specific-override { ... }
```

3. Class Selectors
... It is always preferrable to target styles to CSS classes.
... Make sure to name your classes with semantic names in lowercase and
separated by dashes "-"

```scss
.mdev-main-nav { ... }

.mdev-user-profile { ... }

.mdev-parent-component {

  .mdev-child-component { ... }

  .--child-modifier { ... }
}
```

4. Class Selectors & Variables Naming Convention
... To maintain code clarity and organization it is important to adhere to certain naming conventions when naming classes.
... Keep your names semantic and descriptive of the component it belongs to, not the visual presentation. For instance, a class of .button-red is not helpful, .button-warning would be a lot more descriptive of the purpose.

```scss
/* Utility Classes */

.u-text-center { ... }

.u-text-left { ... }

/* Component Classes */

.mdev-main-nav { ... }

.mdev-content-section { ... }

/* Modifier Classes */

.--warning-text { ... }

.--form-error { ... }

/* Mixins */

@mixin mix-button($color, $padding) {
  // generate code..
}

@mixin mix-columns($columns, $gutter-width) {
  // generate code..
}

/* Color Variables */

$color-brand-primary: #10b0a8;
$color-brand-seconday: #fafafa;
$color-text-body: #000;
$color-btn-warning: #f93a80;

/* Font Variables */
$font-family-main: Helvetica, sans-serif;
$font-size-body: 16px;
```

5. Shorthand Properties
... CSS3 (and soon to be CSS4) and SCSS make full support of shorthand properties. This saves time in typing and keeps the code nice and tidy. Whenever possible please make use of shorthand property notation.

```SCSS
/* Not Recommended */
.mdev-some-class {
  border-top-style: none;
  font-family: palatino, georgia, serif;
  font-size: 100%;
  line-height: 1.6;
  padding-bottom: 2em;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0;
}

/* Recommended Approach */

.mdev-some-class {
  border-top: 0;
  font: 100%/1.6 palatino, georgia, serif;
  padding: 0 1em 2em;
}
```

6. 0's and Units
... Zero units are in fact unitless. If one of your properties is going to use 0px simply write the 0 and omit the unit.
... Whenever entering a integer or decimal as a value for a property always make sure to use the appropriate units.
... Leading zeroes can and should be ommited. Instead of 0.8 you can write .8 and it is valid SCSS.

```scss
/* Incorrect Use of 0 */
.some-wrong-class {
  width: 0px;
  height 0.8vh;
}

/* Incorrect Use of Units */
.some-other-wrong-class {
  width: 120;
  height: 22;
}

/*Correct Use Of Units and 0 */
.some-class {
  width: 70vw;
  height: 10vh;
  padding: 0;
  margin: 0;
}
```

7. Hexadecimal Notations
... Should always be done in lowercase characetrs. It is easier to distinguish '0's and 'o's when used in lower case.

```scss
/* Recommended */
$some-variable: #e0oae1;

/* Not Recommended */
$some-wrong-variable : #E0oAE1;
```


## SCSS Structure Rules

1. Split SCSS files accordingly
... It is a good practice to split SCSS files and create new SCSS files for isolated components. That keeps the SCSS modular and scaleable.
... If you are unsure as to when you should split things into a new file a good rule of thumb is that whenever you are creating a new parent template or component you should consider creating a new sheet.

```
Samples Structure

root-dir
----assets
------styles
--------variables.scss
--------main.scss
--------components
----------component1.scss
----------component2.scss
```

2. SCSS Code Nesting Guidelines
... It is preferrable to keep your CSS classes to AT MOST 3 nesting levels. In ideal conditions you should be able to achieve the necessary visual arrangements in one or two levels of nesting.
... Every level of nesting you add add's more specificity to that specific class, which can be desireable at times but it can also cause headaches with responsiveness or other overrides.
... Code readability and understanding also suffers the deeper you get with the nesting, tracing bugs becomes difficult endeavour.

```scss
/* Too much inception */

.some-parent-view {
  width: 100vw;
  padding: 20px;
  height: 100vh

  .some-child-component {
    width: 20%;
    height: auto;
    overflow: hidden;

    .some-child-specific-override {
      color: blue;

      .some-crazy-insane-deep-class {
        /* How do you override this now? */
        padding: 20px;
      }
    }
  }
}

/* Just right... */

.some-parent-view {
  width: 100vw;
  padding: 20px;
  height: 100vh;
}

.some-child-component {
  width: 20%;
  height: auto;
  overflow: hidden;

  .some-child-specific-override {
    color: blue;
  }
}

.some-specific-override-class {
  padding: 20px;
}
```

3. SCSS Code Spacing and Indentation
... Code blocks should be spaced by one line on top and bottom, unless the last line is also a closing bracket. In which case no space should be left.
... CSS blocks and properties should be properly indentend in relationship to the parent at 2 spaces. No tabs or mix of tabs and spaces will be allowed.
... Opening brackets should be preceeded by one space between the selector and the block.
... Blocks and rules should be separated by 1 new blank line.

```scss
/* Incorrect spacing and tabbing */
.some-parent-class{
  width:10%;
  height: 120px;
  padding:0;
  .some-other-class{
    width: 50%;

  }


  .some-other-other-class{ width: 10%; height:120px; padding:0;}


}
.some-other-parent-class { width: 10%; height: 200px; padding: 20px; background: red; }

/* Correct formatting and spacing */

.some-parent-class {
  width: 10%;
  height: 120px;
  padding: 0;

  .some-other-class {
    width: 50%;
  }

  .some-other-other-class {
    width: 10%;
    height: 120px;
    padding: 0;
  }
}

.some-other-parent-class {
  width: 10%;
  height: 200px;
  padding: 20px;
  background: red;
}
```

4. Multiple Selectors
... When chaining multiple selectors with comma separated lists, always drop each class into it's own line for better legibility.
... Please try to maintain chained selectors to a minimum and grouped in sensible manner.

```scss
/* Incorrect Chaining */
h1,.some-random-classe,h2,h3,h4,p,a { ... }

/* Correct Chaining */
h1,
h2,
h3 {
  ...
}


