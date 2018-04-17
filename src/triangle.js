export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}
Triangle.prototype.notTriangle = function () {
  if(((this.side1 + this.side2) <= this.side3) || ((this.side1 + this.side3) <= this.side2) || ((this.side3 + this.side2) <= this.side2)){
    return true;
  } else {
    return false;
  }
};

Triangle.prototype.equalTriangle = function () {
  if (this.side1 === this.side2 && this.side2 === this.side3) {
    return true;
  } else {
    return false;
  }
};

Triangle.prototype.isoscelesTriangle = function () {
  if ((this.side1 === this.side2) || (this.side1 === this.side3) || (this.side3 === this.side2)) {
    return true;
  } else {
    return false;
  }
};
