function increment() {
    let count = 0

    return function () {
        count++
        return count
    }
}

const udit = increment()
const jay = increment()

console.log(udit());
console.log(udit());
console.log(jay());
console.log(jay());
console.log(jay());



