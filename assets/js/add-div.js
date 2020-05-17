function functionSequence() {
  $('#first').on('click', function () {
    $('#first').after('<div class="middle"></div>');
  });
  $('#second').on('click', function () {
    $('.middle').remove();
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