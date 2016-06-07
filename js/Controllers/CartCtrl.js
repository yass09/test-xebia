app.controller ('CartCtrl', 'cartService' ['$scope', '$rootScope', function ($scope,$rootScope, cartService) {

  $scope.calculTotal = function(array, key){
    return array.reduce(function (a,b){
      return a + b[key];
    }, 0);
  };

  $rootScope.subTotal = 0;
  console.log($rootScope.isbnList);
  console.log($rootScope.url);

  // $rootScope.subTotal = $scope.calculTotal($scope.cart, 'total');
    //
    // discountGet.success(function(data){
    //   $scope.discount = data;
    // });
    // console.log($scope.discount);



  }
]);
