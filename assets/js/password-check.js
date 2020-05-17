var first_password;
var second_password;
function functionSequence(){
  $('#Password1').on('change', function(){
    first_password =$(this).val();
  });
  $('#Password2').on('change', function(){
    second_password =$(this).val();
    
  });
  $('#login-form').on('submit', function(){
    if (first_password != second_password) {
      alert('Password does not match!');
      return false
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