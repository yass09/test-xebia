app.directive('addCartButton', function () {
  return {
    restrict: 'E',
    templateUrl: 'js/Directives/addToCart.html',
    link: function (scope, element, attrs){
      scope.buttonText = 'Ajouter',
      scope.quantityAdded = 0,
      // scope.isbnInCart = [].join(',');

      scope.addQuantity = function() {
        scope.quantityAdded +=1;
        console.log(scope.quantityAdded);
      };
      scope.subtractQuantity = function() {
        if (scope.quantityAdded >= 0){
          scope.quantityAdded -=1;
          console.log(scope.quantityAdded);
        }
      };

      scope.addToCart = function(item){
        for (i = 1; i<= scope.quantityAdded; i++){
          scope.cart.push(item);
          console.log(scope.cart);
        }
      }
    }
  };
});
