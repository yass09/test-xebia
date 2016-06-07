app.directive('addCartButton', function () {
  return {
    restrict: 'E',
    templateUrl: 'js/Directives/addToCart.html',
    controller: ['$scope', '$rootScope', 'cartService', function($scope, $rootScope, cartService) {
      $scope.quantityCounter = 0;

      $scope.addQuantity = function() {
        $scope.quantityCounter += 1;
      };

      $scope.subtractQuantity = function() {
        if ($scope.quantityCounter > 0){
          $scope.quantityCounter -= 1;
        }
      };

      $scope.addToCart = function(item){
        if (cartService.cart.includes(item)){
          item.quantity += $scope.quantityCounter;
        } else {
          cartService.cart.push(item);
          item.quantity = 0;
          item.quantity += $scope.quantityCounter;
          $rootScope.activeCart = true;
        }
        item.total = 0;
        item.total += item.quantity * item.price;
        cartService.isbnList += (item.isbn + ',').repeat($scope.quantityCounter);
        $scope.quantityCounter = 0;
        $rootScope.cartQuantity = cartService.total(cartService.cart, 'quantity');
        console.log(cartService.cart);
        console.log(cartService.isbnList);
        console.log($scope.activeCart);
        console.log(cartService.cart.length);
      };
    }]
  };
});
