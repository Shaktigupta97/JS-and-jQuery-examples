function functionSequence() {
  $('#second').on('click', function () {
    $('#first').after('<div class="middle"></div>');
  });
  $('#first').on('click', function () {
    $('.middle:eq(0)').remove();

  })
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