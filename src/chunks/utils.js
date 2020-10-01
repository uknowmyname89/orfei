function formatNumber(num)
{
  num = num.replace(/\D/g, '');
  return ("" + num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, function($1) { return $1 + " " });
}
$.fn.thousandSeparate = function () {
  return this.each(function () {
    var $input = $(this);
    $input.bind('keyup', function (e) {
      $input.val(formatNumber($input.val()));
    });
  });
};
$.fn.menuFixed = function () {
  return this.each(function () {
    var $header = $(this);
    var sticky = $('#menu').offset().top;
    $(window).resize(function(){
      sticky = $('#menu').offset().top;
    }).scroll(function(){
      if (window.pageYOffset > sticky) {
        $header.addClass("fixed");
      } else {
        $header.removeClass("fixed");
      }
    });
  });
};
$.fn.thousandSeparateString = function () {
  this.text(formatNumber(this.text()));
};

$(function () {
  var $body = $('body');

  //modal
  $body.on('click', '.ajax-modal', function(e){
    e.preventDefault();
    var $obj = $(this).data("target");
    $($obj+' .modal-body').load($(this).data("remote"),function(){
      $(".modal-backdrop").remove();
      $($obj).modal({show:true});
    });
  });
  //thousand separate
  $('[data-thousand-separate]').each(function(){
    $(this).thousandSeparateString();
  });

  $('.menu-fixed').each(function(){
    $(this).menuFixed();
  });
});
