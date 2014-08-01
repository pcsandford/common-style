Rise Vision Style Guide
==============

**Copyright © 2014 - Rise Vision Incorporated.**

*Use of this software is governed by the GPLv3 license (available in the LICENSE file).*

## Introduction
Common CSS styling to be shared across Rise Vision apps, widgets and components. The style guide is published as github pages is available as reference documentation for all Rise Vision UI-components:
**http://rise-vision.github.io/style-guide**


## Installation
1. Install node dependencies `$ npm install`

2. Install front-end dependencies `$ bower install`


## Development
All SASS files go under `/src`. To include them in the final CSS file add them as `imports` in the `app.scss` file.

The build process will pull in all the custom SASS files and the bootstrap SASS files and generate a single `rise.min.css` file. The hierarchy and overwrites are controlled within the `rise.min.css` file. The naming/directory structure has no impact on this.

Run `$ gulp` to see a list of available tasks and `$ gulp dev` to watch for and compile SASS.


## Build
To build run `$gulp build`. This will generate a `dist` folder with `css` and `font` folders.


## Usage
Install the style-guide using bower `$ bower install https://github.com/Rise-Vision/style-guide.git`

The `dist` folder contains the compiled CSS `css/rise.min.css` and all required fonts.

## Github Pages
The `www` folder is deployed as github pages. To do so, run:

`git subtree push --prefix www origin gh-pages`


## Documentation
If you have any questions or problems please don't hesitate to join our lively and responsive community at http://community.risevision.com.

If you are looking for user documentation on Rise Vision please see http://www.risevision.com/help/users/

If you would like more information on developing applications for Rise Vision please visit http://www.risevision.com/help/developers/.


## Contribution
If you are considering contributing to this open source project, our favourite option, we have 3 good reasons why we released this code under version 3 of the GNU General Public License, and we think they are 3 good reasons for why you should get involved too:

1. Together we can make something far better than we could on our own.

2. If you want to use our code to make something that is specific to you, and that doesn’t fit with what we want to do, we don’t want to get in your way. Take our code and make just what you need.

3. We know that some of you nervous types worry about what happens if our company gets taken out in the zombie apocalypse. We get it, and neither one of us wants to deal with that delicate question of software escrow agreements for the “just in case we kick the bucket scenario”. No worries! We made it easy. No fuss, no cost, no lawyers! We published the software here. Have at it.

Are we missing something? Something could be better? Jump in, branch our code, make what you want, and send us a Pull Request. If it fits for both of us then of course we will accept it, maybe with a tweak or two, test it, and deploy it. If it doesn’t fit, no worries, just Fork our code and create your own specialized application for your specific needs. Or, if you’re just feeling paranoid, download the code, and put it under your mattress.

**Either way, welcome to our project!**
