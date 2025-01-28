//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height = height;
	}
	get height(){
		return this._height;
	}
	get width(){
		return this._width;
	}
	getArea(){
		return this._height*this._weight;
	}
}

class Square extends Rectangle {
	constructor(side){
		this._side = side;
	}

	getPerimeter(){
		return this._side * this._side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
