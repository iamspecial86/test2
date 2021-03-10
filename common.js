$(function () {
  $('.menu-wrapper').on('click', function () {
    $('.hamburger-menu').toggleClass('active');
    $('nav ul').toggleClass('active');
  });
  $('.button').on('click', function () {
    $('.popup').addClass('active');
  });
  $('.menu-wrapper2').on('click', function () {
    $('.popup').removeClass('active');
  });
});
