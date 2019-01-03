
/* styles.js */
import css from 'styled-jsx/css'

export default css`
/* Import ET Book styles
   adapted from https://github.com/edwardtufte/et-book/blob/gh-pages/et-book.css */

@font-face { font-family: "et-book";
             src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot");
             src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot?#iefix") format("embedded-opentype"), url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-line-figures/et-book-roman-line-figures.woff") format("woff"), url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-line-figures/et-book-roman-line-figures.ttf") format("truetype"), url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-line-figures/et-book-roman-line-figures.svg#etbookromanosf") format("svg");
             font-weight: normal;
             font-style: normal; }

@font-face { font-family: "et-book";
             src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot");
             src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot?#iefix") format("embedded-opentype"), url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.woff") format("woff"), url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.ttf") format("truetype"), url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.svg#etbookromanosf") format("svg");
             font-weight: normal;
             font-style: italic; }

@font-face { font-family: "et-book";
             src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot");
             src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot?#iefix") format("embedded-opentype"), url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-bold-line-figures/et-book-bold-line-figures.woff") format("woff"), url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-bold-line-figures/et-book-bold-line-figures.ttf") format("truetype"), url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-bold-line-figures/et-book-bold-line-figures.svg#etbookromanosf") format("svg");
             font-weight: bold;
             font-style: normal; }

@font-face { font-family: "et-book-roman-old-style";
             src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot");
             src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot?#iefix") format("embedded-opentype"), url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.woff") format("woff"), url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.ttf") format("truetype"), url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.svg#etbookromanosf") format("svg");
             font-weight: normal;
             font-style: normal; }


.idyll-root { position: relative;
          margin-left: 0;
          width: auto;
          margin: auto; }

.idyll-root h1, .hed { font-weight: 400;
     margin-top: 4rem;
     margin-bottom: 1.5rem;
     font-size: 3.2rem;
     line-height: 1; }


.idyll-root h2 { font-style: italic;
     font-weight: 400;
     margin-top: 2.1rem;
     margin-bottom: 0;
     font-size: 2.2rem;
     line-height: 1; }

h3 { font-style: italic;
     font-weight: 400;
     font-size: 1.7rem;
     margin-top: 2rem;
     margin-bottom: 0;
     line-height: 1; }

hr { display: block;
     height: 1px;
     width: 55%;
     border: 0;
     border-top: 1px solid #ccc;
     margin: 1em 0;
     padding: 0; }

p.subtitle,
.dek { font-style: italic;
             margin-top: 1rem;
             margin-bottom: 1rem;
             font-size: 1.8rem;
             display: block;
             line-height: 1; }

.numeral { font-family: et-book-roman-old-style; }

.danger { color: red; }

section { padding-top: 1rem;
          padding-bottom: 1rem; }

p, ol, ul { font-size: 1.4rem; }

p { line-height: 2rem;
    margin-top: 1.4rem;
    margin-bottom: 1.4rem;
    padding-right: 0;
    vertical-align: baseline; }

/* Chapter Epigraphs */
div.epigraph { margin: 5em 0; }

div.epigraph > blockquote { margin-top: 3em;
                            margin-bottom: 3em; }

div.epigraph > blockquote, div.epigraph > blockquote > p { font-style: italic; }

div.epigraph > blockquote > footer { font-style: normal; }

div.epigraph > blockquote > footer > cite { font-style: italic; }
/* end chapter epigraphs styles */

blockquote { font-size: 1.4rem; }

blockquote p { width: 55%;
               margin-right: 40px; }

blockquote footer { width: 55%;
                    font-size: 1.1rem;
                    text-align: right; }

section>ol, section>ul { width: 45%;
                         -webkit-padding-start: 5%;
                         -webkit-padding-end: 5%; }

li { padding: 0.5rem 0; }

figure { padding: 0;
         border: 0;
         font-size: 100%;
         font: inherit;
         vertical-align: baseline;
         max-width: 55%;
         -webkit-margin-start: 0;
         -webkit-margin-end: 0;
         margin: 0 0 3em 0; }

figcaption { float: right;
             clear: right;
             margin-top: 0;
             margin-bottom: 0;
             font-size: 1.1rem;
             line-height: 1.6;
             vertical-align: baseline;
             position: relative;
             max-width: 40%; }

figure.fullwidth figcaption { margin-right: 24%; }

/* Links: replicate underline that clears descenders */
.idyll-root a:link, .idyll-root a:visited { color: inherit; }

.idyll-root a:link { text-decoration: none;
         background: -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#333, #333);
         background: linear-gradient(#fffff8, #fffff8), linear-gradient(#fffff8, #fffff8), linear-gradient(#333, #333);
         -webkit-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
         -moz-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
         background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
         background-repeat: no-repeat, no-repeat, repeat-x;
         text-shadow: 0.03em 0 #fffff8, -0.03em 0 #fffff8, 0 0.03em #fffff8, 0 -0.03em #fffff8, 0.06em 0 #fffff8, -0.06em 0 #fffff8, 0.09em 0 #fffff8, -0.09em 0 #fffff8, 0.12em 0 #fffff8, -0.12em 0 #fffff8, 0.15em 0 #fffff8, -0.15em 0 #fffff8;
         background-position: 0% 93%, 100% 93%, 0% 93%; }

@media screen and (-webkit-min-device-pixel-ratio: 0) { a:link { background-position-y: 87%, 87%, 87%; } }

.idyll-root a:link::selection { text-shadow: 0.03em 0 #b4d5fe, -0.03em 0 #b4d5fe, 0 0.03em #b4d5fe, 0 -0.03em #b4d5fe, 0.06em 0 #b4d5fe, -0.06em 0 #b4d5fe, 0.09em 0 #b4d5fe, -0.09em 0 #b4d5fe, 0.12em 0 #b4d5fe, -0.12em 0 #b4d5fe, 0.15em 0 #b4d5fe, -0.15em 0 #b4d5fe;
                    background: #b4d5fe; }

.idyll-root a:link::-moz-selection { text-shadow: 0.03em 0 #b4d5fe, -0.03em 0 #b4d5fe, 0 0.03em #b4d5fe, 0 -0.03em #b4d5fe, 0.06em 0 #b4d5fe, -0.06em 0 #b4d5fe, 0.09em 0 #b4d5fe, -0.09em 0 #b4d5fe, 0.12em 0 #b4d5fe, -0.12em 0 #b4d5fe, 0.15em 0 #b4d5fe, -0.15em 0 #b4d5fe;
                         background: #b4d5fe; }

/* Sidenotes, margin notes, figures, captions */
img { max-width: 100%; }

.aside, .sidenote, .marginnote { float: right;
                         clear: right;
                         margin-right: -60%;
                         width: 50%;
                         margin-top: 0;
                         margin-bottom: 0;
                         font-size: 1.1rem;
                         line-height: 1.3;
                         vertical-align: baseline;
                         position: relative; }

.sidenote-number { counter-increment: sidenote-counter; }

.sidenote-number:after, .sidenote:before { content: counter(sidenote-counter) " ";
                                           font-family: et-book-roman-old-style;
                                           position: relative;
                                           vertical-align: baseline; }

.sidenote-number:after { content: counter(sidenote-counter);
                         font-size: 1rem;
                         top: -0.5rem;
                         left: 0.1rem; }

.sidenote:before { content: counter(sidenote-counter) " ";
                   top: -0.5rem; }

blockquote .sidenote, blockquote .marginnote, blockquote .aside { margin-right: -82%;
                                               min-width: 59%;
                                               text-align: left; }

p, footer, table, .aside-container { max-width: 666px; }
.aside-container {
  position: static;
}
div.fullwidth, table.fullwidth { width: 100%; }

div.table-wrapper { overflow-x: auto;
                    font-family: "Trebuchet MS", "Gill Sans", "Gill Sans MT", sans-serif; }

.sans { font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
        letter-spacing: .03em; }

code { font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
       font-size: 1.0rem;
       line-height: 1.42; }

.sans > code { font-size: 1.2rem; }

h1 > code, h2 > code, h3 > code { font-size: 0.80em; }

.marginnote > code, .sidenote > code { font-size: 1rem; }

pre.code { font-size: 0.9rem;
           width: 52.5%;
           margin-left: 2.5%;
           overflow-x: auto; }

pre.code.fullwidth { width: 90%; }

.fullwidth { max-width: 90%;
             clear:both; }

span.newthought { font-variant: small-caps;
                  font-size: 1.2em; }

input.margin-toggle { display: none; }

label.sidenote-number { display: inline; }

label.margin-toggle:not(.sidenote-number) { display: none; }

@media (max-width: 760px) { body { width: 84%;
                                   padding-left: 8%;
                                   padding-right: 8%; }
                            p, footer { width: 100%; }
                            pre.code { width: 97%; }
                            ul { width: 85%; }
                            figure { max-width: 90%; }
                            figcaption, figure.fullwidth figcaption { margin-right: 0%;
                                                                      max-width: none; }
                            blockquote { margin-left: 1.5em;
                                         margin-right: 0em; }
                            blockquote p, blockquote footer { width: 100%; }
                            label.margin-toggle:not(.sidenote-number) { display: inline; }
                            .sidenote, .marginnote { display: none; }
                            .margin-toggle:checked + .sidenote,
                            .margin-toggle:checked + .marginnote { display: block;
                                                                   float: left;
                                                                   left: 1rem;
                                                                   clear: both;
                                                                   width: 95%;
                                                                   margin: 1rem 2.5%;
                                                                   vertical-align: baseline;
                                                                   position: relative; }
                            label { cursor: pointer; }
                            div.table-wrapper, table { width: 85%; }
                            img { width: 100%; } }


* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}


.idyll-root {
  /*padding: 10px;*/
  height: 100%;
  max-width: 666px;
}

.idyll-root div {
  max-width: 666px;
}

svg {
  width: 50% !important;
  margin: 0 auto;
  display: block;
}

input {
  display: block;
  margin: 0 auto;
}

`

