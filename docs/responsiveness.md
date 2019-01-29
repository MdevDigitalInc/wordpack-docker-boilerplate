# :straight_ruler:Responsive Breakpoint Management & Usage
This document covers the *responsive* breakpoint management system implemented on this project. From the implementation to the usage of the *@media* queries in the desired *mobile first* approach.

All of the responsive settings can be found in the [responsive.scss](../vue-app-base/src/assets/styles/responsive.scss "Responsive SCSS Sheet") file.

---

## Breakpoint Management
*@media* query ranges are handled using SASS variables piped through a lower/upper-bound function to select the appropriate values

```scss
/* Breakpoint Definitions */
$phone-range:   (0, 640px);
$tablet-range:  (641px, 1024px);
$laptop-range:   (1024px, 1440px);
$desktop-range:  (1441px, 1920px);
$xl-range: (1921px);
```


## Breakpoint Usage
Whenever possible, strive to write SCSS code that scales using *%/vh/vw* units to ensure fluidity. When creating media query breakpoints please try to adhere to the following model.

Don't worry about creating multiple *@media* queries. They all get compressed through *Gzip* in the asset pipeline and globbed into chunks. Please see [Webpack 2 Asset Pipeline Documentation](./webpack.md "Webpack 2 Asset Pipeline") for more.

```scss
.some-main-class {
  //Mobile First Rules...

  @media #{$tablet-only} {
    //Tablet Overrides...
  }

  @media #{$desktop-up} {
    //Desktop Overrides...
  }
}
```
