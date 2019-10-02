$(document).ready(function() {
  var age = parseInt(prompt("How tall are you?"));

  if (age >= 4) {
    $('.over-4f').show();
  } else if (age < 4) {
    $('.under-4f').show();
  }
});
