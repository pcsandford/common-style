# Rise Vision Style Guide

Common CSS styling to be shared across Rise Vision apps, widgets and components.

## Installation
1. Install node dependencies `$ npm install`

2. Install front-end dependencies `$ bower install`


## Development
All SASS files go under `/src`. To include them in the final CSS file add them as `imports` in the `app.scss` file.

The build process will pull in all the custom SASS files and the bootstrap SASS files and generate a single `rise.min.css` file. The hierarchy and overwrites are controlled within the `rise.min.css` file. The naming/directory structure has no impact on this.

Run `$ gulp` to see a list of available tasks and `$ gulp dev` to watch for and compile SASS.

## Build
To build run `$gulp build`. This will generate a `dist` folder with `css` and `font` folders.
