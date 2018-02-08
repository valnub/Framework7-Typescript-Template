# Typework 7
A template for Framework7 based on TypeScript, AngularJS, SASS and Grunt

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

## Important! Read this first
This is a template for Framework7 apps built on TypeScript, SASS, Grunt and AngularJS. From my experience so far I discovered that TypeScript is really complicated and not much fun to use with F7 and Angular. Also, some people seem to struggle with the grunt compile process. So, I created a new, easier template without any fancy stuff, just plain HTML, CSS and JavaScript which I can recommend to get started for beginners: https://github.com/valnub/Framework7-Pure-Angular-Template

## Compatibility
- Framework7 v1
- Angular 1.x

The brave ones who want to dive into the funky TypeScript fun, read on:

--------------------------------

## How to build

1. No complicated bower or yeoman stuff. Just get from Github.

2. Then, do `npm install` and then `grunt compile` to compile and copy everything from /src to /build. Default task for grunt is “watch” which you can use for auto-compile and -reload in the browser when you do changes in /src.

## Demo

To see the result just call `grunt compile` and then open index.html from `build` folder.

Or you can check this live demo in your browser that I built on top of this template: http://timo-ernst.net/blog/2015/04/02/experiment-an-iphone-app-built-with-framework7-typescript-and-angularjs/

## Get started coding

Good start points to dive into the code are:

- For HTML: src/index.dev.html
- For Scripts: src/ts/Typework7/init.ts
- For Styles: src/sass

## To complicated?

There is a simpler version of this template available which only uses html, css and javascript. No npm, no grunt, no TypeScript, no SASS. If you like things simple, get it here: https://github.com/valnub/Framework7-Pure-Angular-Template

## Credits & Links

- Template is based on this tutorial which is also a good place to start for Angular+TypeScript: https://kodeyak.wordpress.com/2014/02/12/angularjs-via-typescript-controllers/
- Make sure to check Framework7 Docs: http://www.idangero.us/framework7/docs/

Happy coding :-)
Let me know if you have feature requests.
