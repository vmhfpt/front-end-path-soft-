$(document).on("click", ".fa-bars",  function(){
    $('.overlay').css('display', 'block');
    $(window).off('scroll');
    $('.app-nav__content-item-icon-nav').empty();
    
    $('.app-nav__content-item-icon-nav').append('<i class="fa fa-times" aria-hidden="true"></i>');
     $('.app-nav__content .app-nav__content-item:nth-child(2)').css('display', 'block');
 });
 $(document).on("click", ".fa-times, .overlay",  function(){
  $('.overlay').css('display', 'none');
  var lastScrollTop = 0, delta = 5;
	 $(window).scroll(function(){
		 var nowScrollTop = $(this).scrollTop();
		 if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
		 	if (nowScrollTop < lastScrollTop){
        document.getElementById("navbar").style.top = "0";
		 	} else {
        document.getElementById("navbar").style.top = "-120px";
      }
		 lastScrollTop = nowScrollTop;
		 }
	 });
         $('.app-nav__content-item-icon-nav').empty();

 $('.app-nav__content-item-icon-nav').append('<i class="fa fa-bars" aria-hidden="true"></i>');
  //$('.app-nav__content .app-nav__content-item:nth-child(2)').css('display', 'none');
  $('.app-nav__content .app-nav__content-item:nth-child(2)').removeAttr( 'style' );
 

 });

    


$(function(){
  var lastScrollTop = 0, delta = 5;
	 $(window).scroll(function(){
		 var nowScrollTop = $(this).scrollTop();
		 if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
		 	if (nowScrollTop < lastScrollTop){
        document.getElementById("navbar").style.top = "0";
		 	} else {
        document.getElementById("navbar").style.top = "-120px";
      }
		 lastScrollTop = nowScrollTop;
		 }
	 });
 });