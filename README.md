# Backbone/Marionette/RequireJS Basic App Generator

> A [Yeoman](http://yeoman.io) generator for basic Backbone/Marionette/RequireJS single page applications (SPA).

## Overview

This Yeoman Generator allows you to quickly get started building simple web applications using the following stack:

- [RequireJS](http://requirejs.org/docs/start.html)
- [Backbone](http://backbonejs.org/#introduction)
- [Backbone.Marionette](https://github.com/marionettejs/backbone.marionette/wiki)
- [Handlebars](http://handlebarsjs.com/)

### Why Basic?

This generator creates a skeleton application that uses a typical backbone folder structure. Breaking a project up into Models, Collections and Views. 

This can become a bit unwieldly when creating large applications that require a more logical, modular, namespaced approached. For that, I use the advanced generator! Exactly the same stack, slightly different folder structure.

## Getting Started

### Requirements

- [Node.js >= 0.8.0](http://nodejs.org/)
- [Grunt ~0.4.0](http://gruntjs.com/getting-started)
- [GIT CLI](http://git-scm.com/downloads)

Install [Yeoman](https://github.com/yeoman/yo):

    npm install -g yo`

Install [Bower](https://github.com/bower/bower)

    npm install -g bower

### Usage

Install the Generator

    npm install -g https://github.com/mgmilcher/generator-bbappbasic/archive/master.tar.gz

Make a new directory, and `cd` into it:

    mkdir my-new-project && cd $

Run `yo bbappadvanced` to begin a new build.

Run `grunt` for building and `nodemon` for preview

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)