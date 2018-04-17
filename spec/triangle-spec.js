import { Triangle } from './../src/triangle.js';

describe ("Triangle", function() {
  it ("should know if a triangle is not a triangle", function() {
    var triangle = new Triangle(2,3,8)
    expect(triangle.notTriangle()).toEqual(true);
  });
  it ("should know if a triangle is Equilateral", function() {
    var triangle = new Triangle(2,2,2)
    expect(triangle.equalTriangle()).toEqual(true);
  });
  it ("should know if a triangle is isosceles", function() {
    var triangle = new Triangle(2,2,3)
    expect(triangle.isoscelesTriangle()).toEqual(true);
  });
  it ("should know if a triangle is scalene", function() {
    var triangle = new Triangle(2,4,3)
    expect(triangle.isoscelesTriangle()).toEqual(false);
  });
  it ("should know if a triangle is scalene", function() {
    var triangle = new Triangle(2,4,3)
    expect(triangle.equalTriangle()).toEqual(false);
  });
  it ("should know if a triangle is scalene", function() {
    var triangle = new Triangle(2,3,4)
    expect(triangle.notTriangle()).toEqual(false);
  });
});
