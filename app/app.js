/**
* @description : Main application controller
* @author : Saket Joshi
* @version : 1.0
*/

"use strict";

var app = angular.module("eventPlannerApp", [
        "ngRoute"
    ]);

// Setup the app routes
app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "views/home.html",
            controller: "HomeController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});