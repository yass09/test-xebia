app.controller('CartCtrl', ['$scope', '$rootScope', 'cartService', 'discountGet', function ($scope, $rootScope, cartService, discountGet) {
  $scope.cart = cartService.cart;
  $scope.subTotal = 0;
  $scope.subTotal = cartService.total($scope.cart, 'total');

  discountGet.success(function(data){
    $scope.discountData = data;
    $scope.totalPercentage = $scope.subTotal * (1 - ($scope.discountData["offers"][0].value/100));
    if ($rootScope.cartQuantity > 1){
      $scope.totalMinus = $scope.subTotal - $scope.discountData['offers'][1].value;
      $scope.totalSlice = $scope.subTotal - Math.floor($scope.subTotal / $scope.discountData["offers"][2].sliceValue)*$scope.discountData["offers"][2].value;
    };

    if ($rootScope.cartQuantity == 1){
      $scope.totalFinal = $scope.totalPercentage;
      $scope.discount = $scope.discountData["offers"][0].value + '%';
    } else {
      if ($scope.totalPercentage < $scope.totalMinus && $scope.totalPercentage < $scope.totalSlice){
       $scope.totalFinal = $scope.totalPercentage;
       $scope.discount = $scope.discountData["offers"][0].value + '%';
     } else if ($scope.totalMinus < $scope.totalPercentage && $scope.totalMinus < $scope.totalSlice){
       $scope.totalFinal = $scope.totalMinus;
       $scope.discount = $scope.discountData["offers"][1].value + '€';
     } else {
       $scope.totalFinal = $scope.totalSlice;
       $scope.discount = Math.floor($scope.subTotal / $scope.discountData["offers"][2].sliceValue)*$scope.discountData["offers"][2].value + '€, à raison de ' + $scope.discountData["offers"][2].value + '€ par tranche de ' +  $scope.discountData["offers"][2].sliceValue + '€';
      }
    }
  });
}]);
