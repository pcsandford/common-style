# Rise Vision Style Guide

Common CSS styling to be shared across Rise Vision apps, widgets and components.

## Installation
1. Install node dependencies `$ npm install`

2. Install front-end dependencies `$ bower install`


## Development
All less files go under `/src`. To include them in the final CSS file add them as `imports` in the `app.less` file.

The build process will pull in all the custom LESS files and the bootstrap LESS files and generate a single `app.css` file. The hierarchy and overwrites are controlled within the `app.css` file. The naming/directory structure has no impact on this.

Run `$ gulp` to see a list of available tasks and `$ gulp dev` to watch for and compile LESS.

## Build
To build run `$gulp build`. This will generate a `dist` folder with `css` and `font` folders. 
