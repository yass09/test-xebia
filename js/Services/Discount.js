app.service('discountGet', ['$http', function ($http) {
  this.discountUrl = new String('')

  return

    http.get($this.url).success(function (data){
      return data;
    });
}]);
