var number_a = 0;
var number_b = 0;
var operation;

function functionSequence() {
  // $('.input-area').text('0');
  $('.number').on('click', function () {
    var previous_number = $('.input-area').text();
    var number_pressed = $(this).text();
    $('.input-area').text(previous_number + number_pressed);
  });
  $('.operator').on('click', function () {
    var operator_pressed = $(this).text();
    var user_entered_number = $('.input-area').text();
    if (user_entered_number == "") {
      return null;
    }
    if ("+" == operator_pressed) {
      operation = "+"
      number_a = Number(user_entered_number);
      $('.input-area').text("");
    } else if ("-" == operator_pressed) {
      operation = "-"
      number_a = Number(user_entered_number);
      $('.input-area').text("");
    } else if ("*" == operator_pressed) {
      operation = "*"
      number_a = Number(user_entered_number);
      $('.input-area').text("");
    } else if ("/" == operator_pressed) {
      operation = "/"
      number_a = Number(user_entered_number);
      $('.input-area').text("");
    }
  });
  $('.return-value').on('click', function () {
    var user_entered_number = $('.input-area').text();
    if (user_entered_number == "") {
      return null;
    }
    if ("+" == operation) {
      number_b = Number(user_entered_number);
      $('.input-area').text(number_a + number_b);
    } else if ("-" == operation) {
      number_b = Number(user_entered_number);
      $('.input-area').text(number_a - number_b);
    } else if ("*" == operation) {
      number_b = Number(user_entered_number);
      $('.input-area').text(number_a * number_b);
    } else if ("/" == operation) {
      number_b = Number(user_entered_number);
      $('.input-area').text(number_a / number_b);
    }


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