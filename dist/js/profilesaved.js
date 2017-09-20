(function($) {

  'use strict';

  // Full height
  $(window).on('load', function(){
    setCatalogueHeight();
  });

  function setCatalogueHeight() {
    var height = $(window).height();
    $('#profileSaved .container').css('min-height', height);
  }


})(jQuery);
