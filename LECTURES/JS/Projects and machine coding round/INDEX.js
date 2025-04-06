// const arr = [1, 2, 3, 4, 5]

// function enablenagaativeindexing(taargetaarr) {
//     return new Proxy(taargetaarr, {
//         set(taargetaarr, prop, value) {
//             taargetaarr[prop] = `${value}ok`
//         },
//         get(taargetaarr, prop) {
//             return taargetaarr[prop]
//         }
//     })
// }

// const proxyArr = enablenagaativeindexing(arr)



// console.log(`origanal arr `, arr);
// console.log(`origanal arr `, proxyArr);
// proxyarr[1] = 111
// console.log(`updated `, arr);
// console.log(`proxyed updated `, proxyArr);

// const { ifError } = require('assert');
// const { log } = require('console');
// const fs = require('fs')

// console.log("starting program");

// const { error } = require('console');
// fs.readFile('./hello.txt', 'utf-8', function (err, content) {
//     if (err) {
//         console.log('error in reading', err);
//     } else {
//         console.log(console.log(`file loding succsess=> `, content));
//     }
// })
// console.log("end of peogram");
// sum(2, 4, (res) => {
//     console.log('result is  ', res);

// })

// function sum(a, b, cb) {
//     setTimeout(() => {
//         cb(a + b)
//         cb(a - b)
//     }, 5000)
// }


// const fs = require('fs')
// const fsv2 = require('fs/promises');
// const { resolve } = require('path');
// morden code

// own file maker promices

const fs = require("fs")
// read file

// function readFileWithPromise(filepath, encoding) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filepath, encoding, (err, content) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(content)
//             }
//         })
//     })
// }


// // write file
// function writeFileWithPromise(filepath, content) {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(filepath, content, function (err) {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve()
//             }
//         })
//     })
// }

// //unlink

// function unlinkWithPromises(filepath) {
//     return new Promise((resolve, reject) => {
//         fs.unlink('./hello.txt', function (ec) {
//             if (e) {
//                 reject(e)
//             } else {
//                 resolve()
//             }
//         })
//     })
// }



// fs.writeFile('backup.txt', 'udit', function (err){})
// console.log(udit);

// // ------------------------------------------------------------------------ lagacy code


// fs.readFile('./hello.txt', 'utf-8', function (err, content) {
//     if (err) {
//         console.log('err he bhai', err);
//     }
//     else {
//         console.log('content of file is', content);
//         fs.writeFile('backup.txt', content, function (err) {
//             if (err) {
//                 console.log("Error in writing  backup.txt", err);
//             } else {
//                 fs.unlink('./hello.txt', function (e) {
//                     if (e) {
//                         console.log('error deleting file', e);
//                     }
//                     else {
//                         console.log('file deletes');
//                     }
//                 })
//             }
//         })
//     }
// })

// // callbaack hell

fs('hello.txt', 'utf-8')
    .then((content) => writeFileWithPromise('./udit.txt', content))
    .then(() => unlinkWithPromises('./hello.txt'))
    .catch((e) => console.log('Error', e));
 
    const fileCOntent = await readFileWithPromise('./hello.txt','utf-8')
    console.log(fileCOntent);
    