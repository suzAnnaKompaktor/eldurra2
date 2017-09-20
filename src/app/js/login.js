(function($) {

  'use strict';

  // Submit login form
  $('#loginForm').submit(function(e){
    e.preventDefault();
    $('#modalLogin').modal('show') ;
  });


})(jQuery);
