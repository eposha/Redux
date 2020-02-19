// "use strict"

// const obj = {
//     name: 'Tom',
//     age: 27,
//     showName() {
//         console.log(this.name)
//     }
// };

// const name = obj.showName;
// console.log(name())

function f() {
    console.log(this)
};

f()