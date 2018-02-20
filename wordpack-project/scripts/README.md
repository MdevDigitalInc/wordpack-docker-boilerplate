### Build Scripts
This folder conatins all of the build scripts that utilize Webpack to generate
all of the assets necesasry to run the project.

#### Features Include:
* SASS Compiling with Linting
* SASS Autoprefixing
* JS Linting
* JS Babel Transpiling
* Dependency loading
* Image Optimization Pipeline
* Favicon Exporting
* Minification

### webpack.config.js
Contains the main configuration describing how the pipeline will process and
optimize assets for production and development. It includes instructions on
where to look for files and where to output them. Most major changes will happen
here.

### dev.js
Contains initialization code pertinent to the Development environment which
basically just changes some of the error handling. Webpack.config.js is still
master and contains catches for the different environments.

### prod.js
Contains initialization code and error handling for the full production
environment.
