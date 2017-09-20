(function($) {

  'use strict';

  // Submit login form
  $('#tabSearchForm').submit(function(e){
    e.preventDefault();
    $('#sectionCatalogue .tab-pane.active').removeClass('active').removeClass('in');
    $('#tabSearchResults').addClass('active').addClass('in');
  });

   $('[href="#tabProfile"]').click(function(e){
    e.preventDefault();
    $('#sectionCatalogue .tab-pane.active').removeClass('active').removeClass('in');
    $('#tabProfile').addClass('active').addClass('in');
  });


})(jQuery);
