app.controller('CartCtrl', ['$scope', '$rootScope', 'cartService', 'discountGet', function ($scope, $rootScope, cartService, discountGet) {
  // cartService.discountUrl = 'http://henri-potier.xebia.fr/books/' + cartService.isbnList + '/commercialOffers';

  discountGet.success(function(data){
    $scope.discount = data;
    console.log($scope.discount);
  });

  $scope.cart = cartService.cart;
  $scope.subTotal = 0;
  $scope.subTotal = cartService.total($scope.cart, 'total');

  }
]);
