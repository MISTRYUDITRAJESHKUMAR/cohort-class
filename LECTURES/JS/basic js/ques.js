// create an array containing diffrent type of tea
let difftypetea = [
    'green',
    'blacktea',
    "oloong-tea",
    'harbal',
    'harbal']

// add tea "chamomile"
difftypetea.push("chamomile")

// rempve olong
const index = difftypetea.indexOf('oloong-tea')

if (index > -1) {
    difftypetea.splice(index, 2)
}
// console.log(difftypetea);


// filter the  list of only teas that are caffeinated

const caffinatedtea = difftypetea.filter(tea => tea !== 'harbal')
// console.log(caffinatedtea);

// sort the list of teas in alphabetical order

difftypetea.sort()
// console.log(difftypetea);

//use for loop to print eaach type of tea in array

for (let i = 0; i < difftypetea.length; i++) {
    // console.log(typeof [i]);
}

///use for loop to count how many teas are caffrinatted

for (let i = 0; i < difftypetea.length; i++) {
    let caffinated = 0
    if (difftypetea[i] !== "harbal") {
        caffinated++
    }
}

//use afor loop to create a new array with all tea name in uppercase

const uppercase = []
for (let i = 0; i < difftypetea.length; i++) {
    uppercase.push(difftypetea[i].toUpperCase())
}
// console.log(uppercase);

//use  for loo[ to find the tea nme is maximum charecter 

// const longesttea = ""
// for (let i = 0; i < difftypetea.length; i++) {
//     if (difftypetea[i].length > longesttea.length) {

//         longesttea = difftypetea[i]
//     }
//     console.log(longesttea);
// }


// use for loop to revers array

const revers = []
for (let i = difftypetea.length - 1; i >= 0; i--){
    revers.push(difftypetea[i])
    
}
console.log(difftypetea);