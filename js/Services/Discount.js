app.service('discountGet', ['$http', 'cartService', function ($http, cartService) {
  this.discountUrl = 'http://henri-potier.xebia.fr/books/' + cartService.isbnList + '/commercialOffers';

  return
    http.get(this.discountUrl).success(function (data){
      return data;
    });
}]);
