# :scissors:Linting SCSS & Jsx

Black Mesa projects come with built in SCSS and Jsx project wide linting. Most of the linting happens live during development through the hot-reload feature in the webpack server. Each time you save your work the linter will run over your JSX and @import SCSS files.

The only caveat with this system is that SCSS contained within .vue files must be linted manually using a NPM task.

## Manual Linting of SCSS contained in .Vue templates

To manually lint your SCSS run the following task:

```bash
npm run lintcss
```

The linter will run through all of the .vue files and look for SCSS to lint.

##Linting of .scss files in the structure

The linting of all other SCSS files excluding vendor and Node dependencies is handled by Webpack automatically and do not require any extra tasks.

