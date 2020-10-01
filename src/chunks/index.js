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
});
