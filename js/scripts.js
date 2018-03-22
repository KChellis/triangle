var notTriangle = function(num1, num2, num3) {
  if(((num1 + num2) <= num3) || ((num1 + num3) <= num2) || ((num3 + num2) <= num2)){
    return true;
  } else {
    return false;
  }
}
var equalTriangle = function(num1, num2, num3) {
  if (num1 === num2 && num2 === num3) {
    return true;
  } else {
    return false;
  }
}
var isoscelesTriangle = function(num1, num2, num3) {
  if ((num1 === num2) || (num1 === num3) || (num3 === num2)) {
    return true;
  } else {
    return false;
  }
}


$(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var side1 = parseFloat($("#side1").val());
    var side2 = parseFloat($("#side2").val());
    var side3 = parseFloat($("#side3").val());
    if (notTriangle(side1, side2, side3)) {
      $("#type").text("This is not a triangle.");
    } else if (equalTriangle(side1, side2, side3)) {
      $("#type").text("This is an equilateral triangle.");
    } else if (isoscelesTriangle(side1, side2, side3)) {
      $("#type").text("This is an isosceles triangle.");
    } else {
      $("#type").text("This is a scalene triangle.");
    }
  });
});



















//
// $(function() {
//   $("form#triangle").submit(function(event) {
//     event.preventDefault();
//     var side1 = parseFloat($("#side1").val());
//     var side2 = parseFloat($("#side2").val());
//     var side3 = parseFloat($("#side3").val());
//     if (((side1 + side2) <= side3) || ((side1 + side3) <= side2) || ((side3 + side2) <= side2)) {
//       $("#type").text("This is not a triangle.");
//     } else if (side1 === side2 && side2 === side3) {
//       $("#type").text("This is an equilateral triangle.");
//     } else if ((side1 === side2) || (side1 === side3) || (side3 === side2)) {
//       $("#type").text("This is an isosceles triangle.");
//     } else {
//       $("#type").text("This is a scalene triangle.");
//     }
//   });
// });
