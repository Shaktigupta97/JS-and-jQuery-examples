function functionSequence(){
  $('.block-1').mouseenter(function(){
    // // console.log('I am running');
    // $('.block-2').animate({
    //   marginLeft: 45
    // }, 300);
    $('.block-2').addClass('flip');
  });
  $('.block-1').mouseout(function(){
    // // console.log('I am running');
    // $('.block-2').animate({
    //   marginLeft: 10
    // }, 300);
    $('.block-2').removeClass('flip');
  });
}

// =========================================================
// On Load
// =========================================================
if (window.addEventListener) {
  window.addEventListener('load', function () {
    functionSequence();
  });
} else {
  window.attachEvent('onload', function () {
    functionSequence();
  });
}