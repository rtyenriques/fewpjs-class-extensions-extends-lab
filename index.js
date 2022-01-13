// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter(){
       return this.sides.reduce((value1, value2) => (value1 + value2))
    }
}

class Triangle extends Polygon{
    get isValid() {
    //    let a = this.sides[0]
    //    let b = this.sides[1]
    //    let c = this.sides[2]
    let a,b,c = [this.sides[0], this.sides[1],this.sides[2]]
       const con1 = a + b > c;
       const con2 = b + c > a;
       const con3 = c + a > b;
       return con1 && con2 && con3;
    }

}

class Square extends Polygon {
    get isValid() {
  
    return this.sides.every( (val, i, arr) => val === arr[0] )
       
    }
    get area() {
        let a = this.sides[0]
        let b = this.sides[1]
        let newArea = a * b
        return newArea

    }

}
    

