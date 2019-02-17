define(function(require,exports,module){
    function addcount(num){
       var price=10;
		var total=num*price;
		return total;
    }
  exports.addcount = addcount;
})
