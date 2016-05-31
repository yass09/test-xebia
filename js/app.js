var app = angular.module('bookStoreApp',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'StoreCtrl',
      templateUrl: 'views/books.html'
    })
    .when('/panier', {
      controller: 'CartCtrl',
      templateUrl: 'views/cart.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
