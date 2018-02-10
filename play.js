 (function($) {

    if (Modernizr.pointerevents) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".grid-item").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".grid-item").hasClass("hover")) {
                $(this).closest(".grid-item").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".grid-item").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }

var allPanels = $('.tray > .more').hide();
        $( '.more' ).before( '<a class="expand">+ Read More</a>' );
        $('.expand').click(function(e){
            $(this).next('.more').slideToggle();
            $(this).text( $(this).text() == '+ Read More' ? "- Show Less" : "+ Read More");
        return false;
        
    });

$("#mobile-menu").mmenu({
         // options
         setSelected: {
               // set selected options
               current :  true,
               hover : true,
               parent : true,
            }
      }, {
         // configuration
         classNames: {
            selected: "current"
         }
      });


$('.conf').matchHeight();
$('#top-nav').children().children('select').bind('change', function () {  
  $("html, body").animate({scrollTop: $('#' + $(this).val()).offset().top}, "slow");

    
});

})(jQuery);






