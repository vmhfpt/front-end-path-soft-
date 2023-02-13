
var owlNext = $(".app-detail__product-present-fixed");
   
owlNext.owlCarousel({
 
 
 items: 1,
 margin: 10,
 autoplay: false,
 center : true,
 loop: true,
 dots: false,
 nav: true,
 autoplayTimeout: 5000,
 
});

$('.section-popup__product').click((e) => {
    if ($(e.target).children(".section-popup__product-container").length === 0) {
  
   }else {
     $('.section-popup__product').css('display', "none");
   }
 })
 $('.app-product-content-grid-item-img-tab .app-product-content-grid-item-img-tab-item:last-child').click(function() {
     $('.section-popup__product').attr("style", "display: flex !important");
 })
 $('.close-popup-product').click(function(){
     $('.section-popup__product').css('display', "none");
 })

 $('.app-product-filter__right-item-button').click(function(){
  $('.app-product-content__left').css('display', 'flex');
  $('.overlay-filter').css('display', 'block');
})
$('.overlay-filter').click(function(){
  $('.app-product-content__left').css('display', 'none');
  $('.overlay-filter').css('display', 'none');
})