app.controller ('StoreCtrl', ['$scope', '$rootScope', 'bookList', function ($scope,$rootScope,bookList) {
    bookList.success(function (data){
      $scope.books = data;
    });
    $scope.cart = [];
    $rootScope.cartQuantity = 0;
    $rootScope.isbnList = '';

  }
]);
