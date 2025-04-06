class Person {
    constructor(fname, lname,age) {
        this.fname = fname
        this.lname = lname
        this.age = age
    }
    getFullname() {
        return `${this.fname}${this.lname} and age is ${this.age}`
    }
}


const p1 = new Person("udit", "istry","12")
const p2 = new Person("adit", "jaiistry","15")
console.log(p1.getFullname());
console.log(p2.getFullname()); 

 
