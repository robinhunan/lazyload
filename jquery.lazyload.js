
/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://github.com/robinhunan/lazyload
 *
 */
$.fn.extend({lazyLoad : function() { 
	function imgLazyLoad(){
  
	  $.each($("#lazyImg img"),function(i,o){  
		var windowHeight=$(window).height(); 
		var scrollTop=$(document).scrollTop();      
		  
		if($(o).attr("src")==$(o).attr("pic")){
		  return true;
		}else if( $(o).offset().top<=(scrollTop+windowHeight) && $(o).offset().top >= scrollTop ){ 
		  if($(o).attr("pic") != undefined || $(o).attr("pic") != "undefined" ){ 
			var imgSrc = $(o).attr("pic");
			$(o).attr("src",imgSrc);
			$(o).fadeTo(1000,1.00);
		  } 
		}         
	  });
	}
	imgLazyLoad();
	this.scroll(imgLazyLoad).resize(imgLazyLoad);
}});
