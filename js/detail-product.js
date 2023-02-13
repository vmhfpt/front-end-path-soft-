  
     $(".app-product-content-grid-carousel").owlCarousel({
        items: 4,
        margin: 15,
         autoplay: true,
        
         loop: true,
         dots: false,
         nav: true,
        autoplayTimeout: 5000,
        responsive: {
          0: {
              items:2,
          },
          600: {
              items: 2,
          },
  
          800: {
              items: 3,
          },
          1000: {
              items: 3,
          },
          1200: {
              items: 4,
          }
      }

       
       });
    var owls = $(".app-detail__product-list");
    var owl = $(".app-detail__product-present");
    
    owl.owlCarousel({
     //onDragged: callback,
     onChanged :callback,
     items: 1,
     margin: 10,
     autoplay: false,
     center : true,
     loop: true,
     dots: false,
     nav: true,
     autoplayTimeout: 5000,
     
   });



   owls.owlCarousel({
     items: 1,
     margin: 11,
     autoplay: false,
     
     loop: false,
     dots: false,
     nav: false,
     autoplayTimeout: 5000,

     responsive: {
       0: {
          items: 4,
       },
       600: {
          items: 5,
       },

       800: {
          items: 3,
       },
       1000: {
          items: 4,
       },
       1200: {
          items: 5,
       },
     },
   });

   

  

   $(".click-show-slide").click(function () {
   
     $(
       ".app-detail__product-list .owl-item"
     ).removeClass("app-detail__product-list-item-active");
     $(this).addClass("app-detail__product-list-item-active");

     let point = $(this).attr("data-slide");
  
     owl.trigger("to.owl.carousel", Number(point) - 1, [300]);
   });



   function callback(event) {
     // var item     = event.item.index;
     let current =
       event.item.index + 1 - event.relatedTarget._clones.length / 2;
     let itemsCount = event.item.count;

     if (current > itemsCount) {
       current = 1;
     }

     if (current === 0) {
       current = event.item.count;
     }


       
      owls.trigger("to.owl.carousel", current-1, [300]);
    $('.app-detail__product-list .owl-item').removeClass('app-detail__product-list-item-active');
    var selectors = $('.click-show-slide');
    selectors.eq(current-1).addClass('app-detail__product-list-item-active');
   }
  

$('.app-detail__product-description-title li').click(function(){
    $('.app-detail__product-description-tab').css('display', 'none');
    $('.app-detail__product-description-title li').removeClass('app-detail__product-description-title-active');
    $(this).addClass('app-detail__product-description-title-active');
 
    $('.app-detail__product-description-tab').eq($(this).index()).css('display', 'block');
})