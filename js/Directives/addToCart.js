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
        if ($scope.cart.includes(item)){
          item.quantity += $scope.quantityCounter;
        } else {
          $scope.cart.push(item);
          item.quantity = 0;
          item.quantity += $scope.quantityCounter;
        }
        item.total = 0;
        item.total += item.quantity * item.price;
        $rootScope.isbnList += (item.isbn + ',').repeat($scope.quantityCounter);
        $scope.quantityCounter = 0;
        $rootScope.cartQuantity = cartService.total($scope.cart, 'quantity');
        console.log($scope.cart);
        console.log($rootScope.isbnList);
        console.log($scope.url)
      };



    }],
    // link: function (scope, element, attrs){
    //
    // }
  };
});
