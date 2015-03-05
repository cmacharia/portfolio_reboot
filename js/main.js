// init Isotope
var $container = $('.showcase-gallery').isotope('layout');

// filter items on button click
$('.showcase-filter').on( 'click', 'a', function(e) {
    e.preventDefault();
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
  
  $('.showcase-filter li').removeClass('active');
  $(this).closest('li').addClass('active')
});

