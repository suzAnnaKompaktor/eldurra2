(function($) {

  'use strict';

  // Full height
  $(window).on('load', function(){
    setFullHeight();
  });

  function setFullHeight() {
    var height = $(window).height();
    $('.full-height .container').css('min-height', height);
  }


})(jQuery);
