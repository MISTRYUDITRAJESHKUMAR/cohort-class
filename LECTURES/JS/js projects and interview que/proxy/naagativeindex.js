
// console.log(arr[-1]);


// const user = {
//     name: 'UDIT',
//     age: 30,
//     password: "123"
// }

// const proxyUser = new Proxy(user, {
//     get(target, prop) {
//         console.log(prop);
//         if (prop === "password") {
//             throw new Error("Ecsess denignt");
//         }
//         return target[prop]
//     },
//     set(target,prop,user){

//     }
// })
// // proxyUser.
// console.log(proxyUser.password);


function naagativeIndex(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            const index = Number(prop)
            console.log(prop);
            if (index < 0) {
                return target[target.length + index]
            }
            return target[index]
        },
        set(target, prop, value) {
            const index = Number(prop)
            if (index < 0) {
                target[target.length + index] = value
            } else {
                target[index] = value
            }
            return true
        }
    })
}
let arr = [1, 2, 3, 4]
// let arr = [-5]
let newArr = naagativeIndex(arr)
newArr[100]
// console.log(newArr);

