(function($) {

  'use strict';

  $('.input-file').on('change', function (e) {
    var $parent = $(this).closest('.form-group');
    if (e.target.value.length > 0) {
      $parent.addClass('has-upload');
    }
    else {
      $parent.removeClass('has-upload');
    }
  });

  $('.input-fake').on('blur focus', function (e) {
    var $parent = $(this).closest('.form-group');
    $parent.find('label').trigger('click');
  });

})(jQuery);
