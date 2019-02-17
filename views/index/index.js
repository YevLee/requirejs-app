require.config({
	baseUrl:'../../scripts/',
	paths:{
		'jquery':'jquery.min',
	}
});
require(['jquery']);

define(['jquery','require','exports','module'],function($,require,exports,module){
	var num=0;
	$('#add').click(function(){
		num++;
		require(['utils'],function(utils){
			$('.count').html(utils.addcount(num));
		})
	});
})