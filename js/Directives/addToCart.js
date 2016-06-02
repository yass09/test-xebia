app.directive('addCartButton', function () {
  return {
    restrict: 'E',
    templateUrl: 'js/Directives/addToCart.html',
    link: function (scope, rootScope, element, attrs){
      scope.quantityCounter = 0,

      scope.addQuantity = function() {
        scope.quantityCounter += 1;
      };

      scope.subtractQuantity = function() {
        if (scope.quantityCounter > 0){
          scope.quantityCounter -= 1;
        }
      };

      scope.quantityTotal = function(array, key){
        return array.reduce(function (a,b){
          return a + b[key];
        }, 0);
      };

      scope.addToCart = function(item){

        if (scope.cart.includes(item)){
          item.quantity += scope.quantityCounter;
        } else {
          scope.cart.push(item);
          item.quantity = 0;
          item.quantity += scope.quantityCounter;
        }

        rootScope.isbnList += (item.isbn + ',').repeat(scope.quantityCounter);
        scope.quantityCounter = 0;
        rootScope.cartQuantity = scope.quantityTotal(scope.cart, 'quantity');
        console.log(scope.cart);
        console.log(rootScope.isbnList);
        console.log('Panier :' + rootScope.cartQuantity);


      };
      // console.log(scope.addToCart);

    }
  };
});
