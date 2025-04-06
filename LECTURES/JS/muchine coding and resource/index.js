// const arr = [1, 2, 3]

// const arrNew = arr.map((val) => {
//     return val * 3
// })
// console.log(arrNew);


// if (!Array.prototype.mymap) {
//     Array.prototype.mymap = function (cb) {
//         cb(this.val)
//     }
// }

// const nums = [1, 2, 3, 4]

// nums.foreach((crrent, index) => {
//     console.log(crrent, index);
// })

// if (!Array.prototype.myforeach) {
//     Array.prototype.myforeach = function (cb) {
//         for (let a = 0; a < this.length; a++) {
//             cb(this[a], a)
//         }
//     }
// }

// const myarr = [1, 2, 3, 4, 5]
// myarr.myforeach((crr, index) => {
//     console.log(crr, index);

// })


// if (!Array.prototype.mymap) {
//     Array.prototype.mymap = function (cb) {
//         const result = []
//         for (let a = 0; a < this.length; a++) {
//             const val = cb(this[a], a);
//             result.push(val)
//         }
//         return result
//     }
// }


// const arr = [1, 2, 3]
// const aj = arr.mymap((c) => c * 9);

// console.log(aj);




// const newArr = arr.reduce((crrent, index) => {
//     return crrent + index
// })
// console.log(newArr);



// if (!Array.prototype.myreduce) {
//     Array.prototype.myreduce = function (cb) {
//         let acc = this[0];
//         for (let i = 0; i < this.length; i++) {
//             acc = cb(acc, this[i])
//         }
//         return acc
//     }
// }

// const newArr = arr.myreduce((crrent, index) => crrent + index)
// console.log(newArr);

// const arr = [1, 2, 3]

// // Check if the `myreduce` method is not already defined on the Array prototype
// if (!Array.prototype.myreduce) {
//     // Define the `myreduce` method
//     Array.prototype.myreduce = function (cb) {
//         // Initialize the accumulator with the first element of the array
//         let acc = this[0];
//         // Iterate through the array starting from the first element
//         for (let i = 0; i < this.length; i++) {
//             // Update the accumulator by applying the callback function
//             acc = cb(acc, this[i]);
//         }
//         // Return the final accumulated value
//         return acc;
//     };
// }
// const a = arr.myreduce((e) => {
//     return e * 6
// })
// console.log(a);



