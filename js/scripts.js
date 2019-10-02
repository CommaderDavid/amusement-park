$(document).ready(function() {
  var age = parseInt(prompt("How tall are you?"));

  if (age >= 4) {
    $('.over-4f').addClass("red-background");
  } else if (age < 4) {
    $('.under-4f').addClass("green-background");
  }
});
