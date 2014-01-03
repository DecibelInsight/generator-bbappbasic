/*!
 * <%= _.capitalize(appName) %>
 * Author: <%= _.capitalize(author) %>
 */

define(['<%= _.capitalize(appName) %>', '<%= _.capitalize(appName) %>.views', 'backbone', 'marionette'],

    function (App, Views, Backbone, Marionette) {

        'use strict';

        return Backbone.Marionette.Controller.extend({

            initialize: function (options) {
            },

            //gets mapped to in AppRouter's appRoutes
            index: function () {
                var homeView = new Views.HomeView();

                App.mainRegion.attachView(homeView);
                App.mainRegion.show(homeView);
            }
            
        });

    }
);