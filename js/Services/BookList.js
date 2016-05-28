app.service('bookList', ['$http', function ($http){
    $http.get('http://henri-potier.xebia.fr/books').then(function () {
        
    });
  }
]);
