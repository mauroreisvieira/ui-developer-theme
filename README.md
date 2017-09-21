# UI Developer Test

Environment for building a small HTML and CSS page with a modular approach, using [SMACSS](https://smacss.com/) and [BEM](http://getbem.com/introduction/) as preferred methodologies.

## Prerequisites

This framework uses uses [Node](https://nodejs.org) for core processing, [npm](https://www.npmjs.com/) to manage project dependencies, and [gulp.js](http://gulpjs.com/) to run tasks and interface with the core library. Node version 4 or higher suffices. You can follow the directions for [installing Node](https://nodejs.org/en/download/) on the Node website if you haven't done so already. Installation of Node will include npm.

It's also highly recommended that you [install gulp](https://github.com/gulpjs/gulp/blob/4.0/docs/getting-started.md) globally.

## Instalation

Clone this repository and run
```bash
npm install
```

## File Structure
```
├── src
|   ├── header
|   ├── index.html
|   ├── index.json
|   └── index.scss
├── gulpfile.js
├── package.json
└── README.md
```

## Usage

To run the development environment
```bash
npm run dev
```

## Working on the Test

You should only use the `src` folder for development. Each section in the page [see attached PDF](resources/wireframe.pdf) should have it's own folder, with a `index.html` file for the markup, and a `_index.scss` (or other name) to be imported in the global file `src/index.scss`.

The main idea is to develop the HTML and CSS as a component that can be consumed by other application or re-arranged in the page, without affecting other components on the same page.

### Sections description | [see attached PDF](resources/wireframe.pdf) ###

1. Header / Navigation: The logo should work on regular and 2x screens. The navigation should be ready for mobile devices.
2. Hero section: The background should be responsive and ready for 2x screens, and needs to keep its aspect ratio while covering the entire hero section. Add a title and subtitle on top of the search bar.
3. Cards: Each card should have some content (text / image or both), and a call to action button. This cards should be responsive.
4. Avatar / Message bubbles: Create a discussion like list with some avatars and message bubbles. Each message should have some rating with stars.
5. Progress steps: Create a progress steps bar.
6. Modal / Login form:  Create a modal like window with a basic login form inside.
7. Pagination: Create a pagination component with buttons for first, last, next and previous pages, and page numbers.
8. Checkboxes / toggles: Custom style a checkbox and create a toggle button switch. Add some labels. 

### Working with images ###

Make use of https://placeholder.com/

### Additional Information

| File | Description |
| --- | --- | --- |
| `./src/index.html` | bootstraps the page. you need to add the partial element under the `<body>` section. This is added with [Mustache](https://mustache.github.io/) syntax, this should be the only place that you require to use it |
| `./src/index.json` | add all the required paths for the partial template files (components) |
| `./src/index.scss` | main application SCSS file. Include your component files here. **Note:** we are using Normalize as the first import, but you may choose to remove it |
| `./src/header/` | example folder for the header component |

