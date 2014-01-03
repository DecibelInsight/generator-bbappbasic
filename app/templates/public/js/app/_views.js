/*!
 * <%= _.capitalize(appName) %>
 * Author: <%= _.capitalize(author) %>
 */

define(function (require) {
    
    'use strict';
    
    return {
        HomeView    : require('Views/HomeView'),
        FooterView  : require('Views/FooterView'),
        HeaderView  : require('Views/HeaderView')
    };

});

