# docs-redux
A repo for developing the new docs and editor pages, made with next.js

## Quick Start

* Clone this repo
* Install dependencies (`npm install`)
* Start dev server (`npm run dev`)

## Developing

You will need to use a computer where you've installed npm (likely the same one you use to develop documents in Idyll). If you don't have npm and don't remember how to install it, see [npm's website](https://www.npmjs.com/get-npm).

In your terminal, navigate to the directory that this README file is stored in (`idyll/packages/idyll-docs/`) and install necessary dependencies by simply running `npm install`.

Once you've done this the first time, you can run the dev server with `npm run dev`. 
This server will run on [port 3000](localhost:3000) by default.  

The table of contents found on the sidebar is controlled by the file `contents.js`. If you create a new page, make sure you add it to the sidebar.

The individual pages can be found in the `pages/docs` subdirectory. 
If you aren't familar with writing documentation this way, you may find it easiest to duplicate another file, such as `introduction.js`, then empty the page's contents, rename the file, and work from there. (A similar process can be used to update `contents.js` if you're unfamiliar with the syntax.)
You'll notice that the contents of the page are contained in \`backticks\`. 
This means that you'll need to put a `\` before any backticks that you want to use with markdown syntax and a `\\\` before any backticks that you want to render as visible text (one to send the second `\` to markdown and the third to send the backtick itself to markdown). 
If you are feeling uncertain of how to set up the document, 