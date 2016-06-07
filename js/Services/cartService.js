app.service('cartService', function (){
  this.cart;

  this.total = function(array, key){
    return array.reduce(function (a,b){
      return a + b[key];
    }, 0);
  };
});
