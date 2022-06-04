/*
    CIT 281 Project 6
    Name: Zoe Turnbull
*/

/* CUSTOM CLASS */

class Shape {
    // Base class for additional two classes.

    constructor(sides = []){
        this._sides = sides;
    }

    perimeter() {
        return this._sides.length >= 1 ? this._sides.reduce((totPerim, side) => { return totPerim + side; }, 0) : 0;
    }
}

class Rectangle extends Shape {
    // Inherits from the Shape class using the extends operator

    constructor(length = 0, width = 0){
        super([length, width, length, width]);
        // Properties    
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }

}

class Triangle extends Shape {
    // Inherits from the Shape class using the extends operator

    constructor(sideA = 0, sideB = 0, sideC = 0){
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    area() {
        const halfOfPerim = this.perimeter(this.sideA, this.sideB, this.sideC) / 2;
        const bigArea = halfOfPerim * (halfOfPerim - this.sideA) * (halfOfPerim - this.sideB) * (halfOfPerim - this.sideC);
        return Math.sqrt(bigArea);
    }

}

/* GENERIC CODE BLOCK */

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

const rectData = data[0];
const squaData = data[1];
const triData = data[2];

//console.log(rectData);
//console.log(new Rectangle(rectData[0], rectData[1]));

console.log("Rectangle with sides " + rectData + " has a perimeter of " + new Rectangle(rectData[0], rectData[1]).perimeter() + " and an area of " + new Rectangle(rectData[0], rectData[1]).area());
console.log("Square with sides " + squaData + " has a perimeter of " + new Rectangle(squaData[0], squaData[1]).perimeter() + " and an area of " + new Rectangle(squaData[0], squaData[1]).area());
console.log("Triangle with sides " + triData + " has a perimeter of " + new Triangle(triData[0], triData[1], triData[2]).perimeter() + " and an area of " + new Triangle(triData[0], triData[1], triData[2]).area());
console.log("Shape with " + data[3].length + " side unsupported");
console.log("Shape with " + data[4].length + " side unsupported");

/* TEST SHAPE CLASS */
//console.log(new Shape([5, 10]).perimeter());  // 15
//console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
//console.log(new Shape().perimeter()); // 0

/* TEST RECTANGLE CLASS */
//console.log(new Rectangle(4, 4).perimeter());  // 16
//console.log(new Rectangle(4, 4).area());  // 16
//console.log(new Rectangle(5, 5).perimeter()); // 20
//console.log(new Rectangle(5, 5).area()); // 25
//console.log(new Rectangle().perimeter()); // 0
//console.log(new Rectangle().area()); // 0

/* TEST TRIANGLE CLASS */
//console.log(new Triangle(3, 4, 5).perimeter());  // 12
//console.log(new Triangle(3, 4, 5).area());  // 6
//console.log(new Triangle().perimeter()); // 0
//console.log(new Triangle().area()); // 0