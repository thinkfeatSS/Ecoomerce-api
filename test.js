// IFFE
// imediately invoveced function expersions
// function func (){
//     console.log("Hello world");
// }
// func()

// // (()=>{
// //     console.log("Hello world");
// // })();

// const Empty = require("./model/emptySchema");
// // console.log(Empty);


// This
// Object Oriented Style

// std_one_name = "Rashid"
// std_one_class = "one"
// std_one_roll = 1

// std_two_name = "Rashid"
// std_two_class = "one"
// std_two_roll = 1

// std_three_name = "Rashid"
// std_three_class = "one"
// std_three_roll = 1

// std_four_name = "Rashid"
// std_four_class = "one"
// std_four_roll = 1

class Student {
    constructor(name) {
        this._name = name
    }
    
    getName() {
        return this._name
    }
    setName(name){
        this._name = name
    }
}

std_one = new Student("rashid")

std_one.setName("Tahir")
console.log(std_one.getName())