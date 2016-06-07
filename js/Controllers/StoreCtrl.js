app.controller ('StoreCtrl', ['$scope', '$rootScope', 'bookList', 'cartService', 'discountGet', function ($scope,$rootScope,bookList, cartService, discountGet) {
    bookList.success(function (data){
      $scope.books = data;
    });
    $scope.cart = [];
    $rootScope.cartQuantity = 0;
    $rootScope.isbnList = new String('');
    



  //   $rootScope.removeVirgule = function () {
  //     $scope.isbnList.replace(/(\s+)?.$/, '');
  //   }
  //   $rootScope.url =  'http://henri-potier.xebia.fr/books/'+$scope.isbnList+ '/commercialOffers';
  }
]);
