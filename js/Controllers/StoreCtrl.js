app.controller ('StoreCtrl', ['$scope', '$rootScope', 'bookList', 'cartService', function ($scope,$rootScope,bookList, cartService) {
    bookList.success(function (data){
      $scope.books = data;
    });
    $rootScope.cartQuantity = 0;
    $rootScope.activeCart = false;
    cartService.isbnList = new String('');

    $scope.removeVirgule = function () {
      cartService.isbnList = cartService.isbnList.replace(/(\s+)?.$/, '');
      console.log(cartService.isbnList);
    }
  //   $rootScope.url =  'http://henri-potier.xebia.fr/books/'+$scope.isbnList+ '/commercialOffers';
  }
]);
