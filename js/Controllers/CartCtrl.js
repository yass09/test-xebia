app.controller('CartCtrl', ['$scope', '$rootScope', 'cartService', 'discountGet', function ($scope, $rootScope, cartService, discountGet) {
  discountGet.success(function(data){
    $scope.discount = data;
    // console.log($scope.discount);
  });

  $scope.cart = cartService.cart;
  $scope.subTotal = 0;
  $scope.subTotal = cartService.total($scope.cart, 'total');





  }
]);
