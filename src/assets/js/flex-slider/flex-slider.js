module.exports = function (){
  setTimeout(function(){
	$('.flexslider').flexslider({
	  animation: "slide",
	  controlNav: false,
	  start: function(slider){
	    $('body').removeClass('loading');
	  }
	});
  }, 1000);  
}