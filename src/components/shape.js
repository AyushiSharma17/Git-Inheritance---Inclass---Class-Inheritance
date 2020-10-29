// declare class

// export class using module.exports

class Shape {

    constructor() {
        this.color = "red";
    }
    drawShape() {
        console.log("Drawing Shape");
    }
    calculateArea() {
        console.log("Dont know area of unknown shape");
        return 0;
    }
}
module.exports = Shape;

/**
class GreenCircle extends Circle {
    constructor() {
        super("green");
    }
}
*/