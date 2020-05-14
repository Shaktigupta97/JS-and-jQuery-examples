$(".event-detector").on('click', function () {
  $('#event-messages').append(" Click Event");
});

$("#formGroupExampleInput").on('keyup', function () {
  $('#event-message').text($("#formGroupExampleInput").val());
});

$("#formGroupExampleInput1").on('keyup', function () {
  $('#formGroupExampleInput2').val($("#formGroupExampleInput1").val());
});

$(".cookie-input").on('click', function () {
  var inputValue = $("#formGroupExampleInput").val();
  Cookies.set('newTestCookie', inputValue, {
    expires: 7,
    path: '/'
  });
});

$(".delete-cookie").on('click', function () {
  var inputValue = $("#formGroupExampleInput").val();
  Cookies.remove('newTestCookie', {
    path: '/'
  });
});

// Sliders
function slicksliders() {
  $('.single-item').slick({
    slidesToShow: 3,
    autoplay: true,
    centerPadding: '40px',
    arrows: false,
  });

  $('.centre-mode').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.one-time').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true
  });

  $('.variable-width').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: false,
    adaptiveHeight: true,
  });
}


$(document).ready(function () {
  try { slicksliders() } catch (error) {}
});

// owl-carousel

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
})


$('.owl-carousel').owlCarousel({
  items:5,
  loop:true,
  margin:10,
  merge:true,
  responsive:{
      678:{
          mergeFit:true
      },
      1000:{
          mergeFit:false
      }
  }
});
