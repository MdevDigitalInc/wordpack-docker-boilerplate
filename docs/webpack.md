# Webpack 4 Setup & Configuration
---

BlackMesa projects utilize Webpack as the build and production tool for both Production Deployments and Local Development. There are many features and configurations available with Webpack, for more information please visit the [Official Documentation Page](https://webpack.js.org/configuration/, "Webpack 2 Official Documentation"). The purpose of this document is to highlight some of the important configurations pertinent to this project.

## Required Plugins

### Autoprefixer
Responsible for adding all vendor prefixes to our SCSS - Both the SCSS within the Vue.js components and the SCSS contained in regular .SCSS files throughout the project. This should ensure full compatibility with old browsers and allow Front-End developers to work more quickly.

### Stylelint Plugin
This plugin ensures that all of the CSS best practices and coding styleguide are followed throughout the project. To lint *.vue files you must run a custom NPM action called *lintcss*. All SCSS contained in .SCSS or .CSS files will be linted automatically during the build and hot-reloading process.

```bash
# Lint SCSS contained in .vue files
npm run lintcss
```
## Extract Text Plugin
Extract Text Plugin allows us to abstract out all of the *Javascript* and *CSS* into their own separate *.js and *.css files. This will reduce the size of the final *build.js* file and allow for more effective browser caching by appending *[hash]* to the end of each file.

## Html Webpack Plugin
With HTML Webpack Plugin you can provide Webpack with a *.html template to serve as a base for generating your main *index.html* page. The advantage of using this method is that Webpack will insert the necessary *Style & Script* calls for each of our app's components automatically. So no matter how we change the output from Webpack, it will always find it's way to the correct location.

---

# Important Project Configurations

## Project Entry Object:
Currently Entry is split into Build & Vendor to try and keep dependencies separate from the core app to allow for better browser caching and maintenance.

```javascript
  entry: {
    // Entry Point for App Code
    build: './src/main.js',
    // Entry Point for Vendors
    vendor: [
      'vue',
      'vue-resource',
      'vue-router',
      'vuex'
    ]
  },
```
This will split our code into at least two bundles *build.js & vendor.js*

## Output Object
The output object must be configured to include variables for *[name]* and *[hash]* to avoid conflicts and collisions.

```javascript
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    filename: 'app/[name][hash].js'
  },
```

## Plugin Calls
```javascript
  plugins: [
    // Auto Prefix & Linting
    new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ]  } }),
    new VueLoaderPlugin(),
    new StyleLintPlugin({
      syntax: 'scss',
      files: ['**/*.vue']
    }),
    // Text Extraction & Chunking
    new ExtractTextPlugin("assets/styles/styles[hash].css"),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],

  // PRODUCTION RULES
  if (process.env.NODE_ENV === 'production') {
    // Require Compression Plugin for Gzip
    const CompressionPlugin = require("compression-webpack-plugin");

    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
      // Clean DIST Folder
      new CleanWebpackPlugin('dist', {} ),
      // Generate Robots.TXT
      new RobotstxtPlugin(robotOptions),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      // Process and Inject Favicon
      new FaviconsWebpackPlugin({
        logo: './src/assets/images/favicon.png', // Source for Favicon file
        prefix: 'icons-[hash]/', // File Prefix
        emitStats: false,
        statsFilename: 'iconstats-[hash].json',
        persistentCache: true,
        inject: true, // Inject Calls on index.html automatically
        // CHANGE COLOR OF THEME
        background: '#fff',
        // CHANGE PROJECT TITLE
        title: 'PROJECT TITLE',

        // Icons to export
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }),
      // Gzip Compression
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ])
  }
```
