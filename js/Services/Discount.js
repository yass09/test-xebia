app.factory('discountGet', ['$http', 'cartService', function ($http, cartService) {
  this.discountUrl = 'http://henri-potier.xebia.fr/books/' + cartService.isbnList + '/commercialOffers';

  return $http.get(this.discountUrl).success(function (data){
      return data;
    }).error(function(err) {
      var errMsg = 'Sorry the request has failed';
      alert(errMsg);
    });
}]);
