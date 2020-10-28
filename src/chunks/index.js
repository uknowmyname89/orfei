import $ from 'jquery';
import 'bootstrap';
import 'bootstrap';
window.jQuery = $;
window.$ = $;
require ('@fancyapps/fancybox');
require ('slick-carousel/slick/slick.css');
require ('slick-carousel');
require('../scss/styles.scss');
require ('bootstrap-datepicker/dist/css/bootstrap-datepicker3.standalone.css');
require ('bootstrap-datepicker');
require ('bootstrap-datepicker/dist/locales/bootstrap-datepicker.ru.min.js');
$(function () {
  //tooltip
  $("body").tooltip({ selector: '[data-toggle=tooltip]' });
  //fancybox
  $("[data-fancybox]").fancybox();
  //toggle mobile menu
  $("[data-toggle-main-menu]").click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.main-menu').toggleClass('active');
    $('body, html').toggleClass('scroll-lock');
  });
  $(".menu-item").closest('.col-lg-auto').hover(
    function() {
      $(this).find('.dropdown').addClass('active');
    }, function() {
      $(this).find('.dropdown').removeClass('active');
    }
  );
  if (localStorage.getItem('#css-back')) {
    $('.blind-line').removeClass('hidden');
    $('a[data-css="'+localStorage.getItem('#css-back')+'"]').addClass('active');
    changeCss('#css-back',localStorage.getItem('#css-back'));
  }
  if (localStorage.getItem('#css-font')) {
    $('.blind-line').removeClass('hidden');
    $('a[data-css="'+localStorage.getItem('#css-font')+'"]').addClass('active');
    changeCss('#css-font',localStorage.getItem('#css-font'));
  }
  $('.blind-trigger').click(function(event) {
    event.preventDefault();
    if (!$('.blind-line').hasClass('hidden')) {
      $('.blind-line').addClass('hidden');
      $('a[href="#css-back"]').removeClass('active');
      $('a[href="#css-font"]').removeClass('active');
      $('a[href="#css-back"]').eq(0).addClass('active');
      $('a[href="#css-font"]').eq(0).addClass('active');
      $('link#css-back').remove();
      $('link#css-font').remove();
      localStorage.removeItem('#css-back');
      localStorage.removeItem('#css-font');
    } else {
      $('.blind-line').removeClass('hidden');
      var link1 = $('a[href="#css-back"].active');
      var link2 = $('a[href="#css-font"].active');
      changeCss(link1.attr('href'),link1.data('css'));
      changeCss(link2.attr('href'),link2.data('css'));
    }
    $('body,html').animate({
      scrollTop: 0
    }, 400);
  });
  $('.css-trigger').click(function(event) {
    event.preventDefault();
    if (!$(this).hasClass('active')) {
      changeCss($(this).attr('href'),$(this).data('css'));
    }
  });
  function changeCss(id,data) {
    $('link'+id).remove();
    $('a[href="'+id+'"]').removeClass('active');
    $('a[data-css="'+data+'"]').addClass('active');
    $('link'+id).remove();
    $('head').append('<link id="'+id.split('#')[1]+'" rel="stylesheet" href="./assets/css/'+data+'.css" type="text/css" />');
    localStorage.setItem(id, data);
  }
});
