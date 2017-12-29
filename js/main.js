$(function() {

  $("#menu").mmenu({
    "extensions": [
            "theme-dark"
         ], 
         "pageScroll": true, 
         "offCanvas": {
            "position": "right"
         }
   // options
}, {
   // configuration
   clone: true
});


        // $(".intro h1").addClass("heroOn").delay(00);
        $('.intro h1').delay(500).queue(function(){
  $(this).addClass("textOn");
});


        // showcase filtering
        $(".grid-item").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });

});


// // init Isotope
// var $container = $('.showcase-gallery').isotope('layout');


// // filter items on button click
// $('.showcase-filter').on( 'click', 'a', function(e) {
//     e.preventDefault();
//   var filterValue = $(this).attr('data-filter');
//   $container.isotope({ filter: filterValue });
  
//   $('.showcase-filter li').removeClass('active');
//   $(this).closest('li').addClass('active')
// });
// $(".nav a").on("click", function(){
//    $(".nav").find(".active").removeClass("active");
//    $(this).parent().addClass("active");
// });

