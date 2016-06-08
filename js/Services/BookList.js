app.factory('bookList', ['$http', function ($http){
   return $http.get('http://henri-potier.xebia.fr/books').success(function (data) {
        return data;
    }).error(function(err) {
      var errMsg = 'Sorry the request has failed';
      alert(errMsg);
    })
  }
]);
