jquery(document).ready(function() {
  //backend logic(business logic)
  var add = function(number1, number2) {
    return number1 + number2;
  };

  // var number1 = parseInt(prompt(" any number:"));
  // var number2 = parseInt(prompt("enter number:"));
  // var result = add(number1, number2);
  //
  // alert(result);


  var subtract = function(number1, number2) {
    return number1 - number2;
  };
  // var number1 = parseInt(prompt("any number:"));
  // var number2 = parseInt(prompt("enter number:"));
  // var result = subtract(number1, number2);
  //
  // alert(result);

  var multiply = function(number1, number2) {
    return number1 * number2;
  };
  // var number1 = parseInt(prompt("any number:"));
  // var number2 = parseInt(prompt("enter number:"));
  // var result = multiply(number1, number2);
  //
  // alert(result);
  var divide = function(number1, number2) {
    return number1 / number2;
  };

  // var number1 = parseInt(prompt("any number:"));
  // var number2 = parseInt(prompt("enter number:"));
  // var result = divide(number1, number2);
  //
  // alert(result);
  //anything below this point is user interface(or front-end logic)


  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("output").text(results);

    // alert(add(number1, number2))
  });
});
