app.controller ('StoreCtrl', ['$scope', 'bookList', function ($scope,bookList) {
    bookList.success(function (data){
      $scope.books = data;
      $scope.cart = [];
    });
  }
]);
