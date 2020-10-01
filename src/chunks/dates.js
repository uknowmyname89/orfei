$(function (){
  $('.dpicker').datepicker({
    isRTL: false,
    format: 'dd.mm.yyyy',
    autoclose:true,
    language: 'ru'
  }).change(function () {
    alert('Изменена дата');
  });
});
