
var app = angular.module("lostiemposcambian.list", ['ngRoute', 'ngAnimate']);

/* The factory creates the various models for the application */
app.factory('dataModel', function() {
  return new DataModel();
});

/*
 * This configures the routes and associates each route with a view and a controller
 */
app.config(function ($routeProvider) {
  $routeProvider
      .when('/lists',
      {
          controller: 'ListController',
          templateUrl: 'app/templates/list.html'
      })
      .otherwise({ redirectTo: '/lists' });
});