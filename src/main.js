import { Triangle } from "./triangle.js"
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();

    let side1 = parseFloat($("#side1").val());
    let side2 = parseFloat($("#side2").val());
    let side3 = parseFloat($("#side3").val());
    let triangle = new Triangle(side1, side2, side3);
    if (triangle.notTriangle()) {
      $("#type").text("This is not a triangle.");
    } else if (triangle.equalTriangle()) {
      $("#type").text("This is an equilateral triangle.");
    } else if (triangle.isoscelesTriangle()) {
      $("#type").text("This is an isosceles triangle.");
    } else {
      $("#type").text("This is a scalene triangle.");
    }
  });
});
