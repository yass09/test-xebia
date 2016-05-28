BookStoreApp.controller ('StoreCtrl', ['$scope', 'bookList', function ($scope,bookList) {
      $scope.books = bookList.data;
}]);
