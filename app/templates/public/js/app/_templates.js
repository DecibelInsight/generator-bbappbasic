/*!
 * <%= _.capitalize(appName) %>
 * Author: <%= _.capitalize(author) %>
 */

define(function (require) {
    
    'use strict';
    
    return {
        Home    : require('hbs!Views/Templates/Home'),
        Footer  : require('hbs!Views/Templates/Footer'),
        Header  : require('hbs!Views/Templates/Header')
    };

});

