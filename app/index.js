'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var intro =
'\n'+
'\nBackbone/Marionette/RequireJS Basic App Builder.' +
'\nJust follow the prompts to start your project.' +
'\n'+
'\n Once completed, run ' + '\'nodemon\'' + ' to start the local server'+
'\n';

var BBAppBasic = module.exports = function BBAppBasic(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(BBAppBasic, yeoman.generators.Base);

BBAppBasic.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(intro);

    var prompts = [
        {
            // type: 'confirm',
            name: 'appName',
            message: 'Name of Application:',
        },
        {
            // type: 'confirm',
            name: 'author',
            message: 'Name of Author:',
        },
    ];

    this.prompt(prompts, function (props) {

        this.appName = props.appName;
        this.author = props.author;

        cb();
        
    }.bind(this));
};

BBAppBasic.prototype.app = function app() {

    // Configure Folders
    this.mkdir('server');
    this.mkdir('public');
    this.mkdir('public/fonts');
    this.mkdir('public/img');
    this.mkdir('public/css');
    this.mkdir('public/js');
    this.mkdir('public/js/app');
    this.mkdir('public/js/test');
    this.mkdir('public/js/app/Models');
    this.mkdir('public/js/app/Collections');
    this.mkdir('public/js/app/Views');
    this.mkdir('public/js/app/Config');
    this.mkdir('public/js/app/Helpers');
    this.mkdir('public/js/app/Helpers/Handlebars');
    this.mkdir('public/js/app/Controllers');
    this.mkdir('public/js/app/Layouts');

    // Configure App Files
    this.template('public/js/app/_app.js', 'public/js/app/' + this.appName + '.js');
    this.template('public/js/app/_router.js', 'public/js/app/' + this.appName + '.router.js');
    this.template('public/js/app/_templates.js', 'public/js/app/' + this.appName + '.templates.js');
    this.template('public/js/app/_views.js', 'public/js/app/' + this.appName + '.views.js');
    this.template('public/js/app/Config/_init.js', 'public/js/app/Config/' + this.appName + '.init.js');

    this.template('public/js/app/Collections/_Collection.js', 'public/js/app/Collections/Collection.js');
    this.template('public/js/app/Models/_Model.js', 'public/js/app/Models/Model.js');
    this.template('public/js/app/Controllers/_Controller.js', 'public/js/app/Controllers/Controller.js');

    this.template('public/js/app/Views/_FooterView.js', 'public/js/app/Views/FooterView.js');
    this.template('public/js/app/Views/_HeaderView.js', 'public/js/app/Views/HeaderView.js');
    this.template('public/js/app/Views/_HomeView.js', 'public/js/app/Views/HomeView.js');

    this.copy('public/js/app/Views/Templates/Home.html', 'public/js/app/Views/Templates/Home.html');
    this.copy('public/js/app/Views/Templates/Header.html', 'public/js/app/Views/Templates/Header.html');
    this.copy('public/js/app/Views/Templates/Footer.html', 'public/js/app/Views/Templates/Footer.html');

    this.template('public/_index.html', 'public/index.html');
    this.template('_Gruntfile.js', 'Gruntfile.js');
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
};

BBAppBasic.prototype.projectfiles = function projectfiles() {
    // CSS
    this.copy('public/css/style_app.css', 'public/css/style_app.css');
    this.copy('public/css/style_screen.css', 'public/css/style_screen.css');
    this.copy('public/css/style_stackview.css', 'public/css/style_stackview.css');

    // Helpers
    this.copy('public/js/app/Helpers/round_number.js', 'public/js/app/Helpers/Handlebars/round_number.js');
    this.copy('public/js/app/Helpers/StackView.js', 'public/js/app/Helpers/StackView.js');

    // Extra JS Libs
    this.copy('libs/prefixfree.js', 'public/js/libs/prefixfree.js');

    // Last few Bits
    this.copy('server/server.js', 'server/server.js');
    this.copy('bowerrc', '.bowerrc');
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
};
