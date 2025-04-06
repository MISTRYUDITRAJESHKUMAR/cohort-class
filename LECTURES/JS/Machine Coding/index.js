// const arr = [1, 2, 3]

// arr

// const str = "udit"

// str.length

// const obj = {
//     x: 1
// }

// obj.x

// foreach funcion making fro prototype====================

// const ret = arr.forEach(function udit(value, index) {
//     console.log(`value at index${index} is ${value}`);

// })

// //dot operetor  objects ke prpertes ko accsess karneke lie help karta he 

// if (!Array.prototype.myforEach) {
//     Array.prototype.myforEach = function (userfn) {
//         const orignelArr = this //current object ki tarf cal karta he
//         for (i = 0; i < orignelArr.length; i++) {
//             userfn(orignelArr[i], i)
//         }
//     }
// }
const arr = [1, 2, 3, 4, 5, 6]



//foreach funcyion dosen't exist on varaible

// real signatrure ko samjo kya input leta he ya kya behavior he


// real signature is - noreturn , function input , value, index
//call my function for every value



// arr.myforEach(function udit(value, index) {
//     console.log(` udit f isvalue at index${index} is ${value}`);

// })

// console.log(`ret is `, ret);




// making map() for prototype

// signature .map
// new return array,eatch elemnt iterate, userfunction

// const a = arr.map(e => e * 3)
// console.log(a);
// console.log(arr);

// if (!Array.prototype.mymap) {
//     Array.prototype.mymap = function (userfn) {
//         const result = []
//         for (i = 0; i < this.length; i++) {
//           const value =  userfn(this[i],i)
//           result.push(value) 
//         }
//         return result
//     }
// }

// const name = [1,2,3]

// const u = name.mymap(a => a*2)
// console.log(u);

// filter function ===========

// return new array / input: userFn
// if user function return karta he to

// const n3 = arr.filter((e) => e % 2 == 0)
// console.log(n3);


if (!Array.prototype.Myfilter) {
    Array.prototype.Myfilter = function (userfn) {
        const ans = []
        for (let i = 0; i < this.length; i++) {
            if (userfn(this[i])) {
                ans.push(this[i])
            }
        }
        return ans
    }
}

const u4 = [1, 5, 8, 2, 2, 6, 12]
const filtering = u4.Myfilter(a => a % 2 == 0 && a % 3 == 0)
 u4.
console.log(filtering);

// all  maded polifils for a prototype



// https://cdnjs.cloudflare.com/ajax/libs/js-polyfills/0.1.43/polyfill.js

