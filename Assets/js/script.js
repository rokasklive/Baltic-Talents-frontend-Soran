$(document).ready(function(){
  $('.boxes').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
  });
});
