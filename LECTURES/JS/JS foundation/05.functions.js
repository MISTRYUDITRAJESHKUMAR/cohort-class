// function greet(name) {
//     console.log(`hello${name}`);

// }
// greet(" udit")
// greet(" mistry")


// let globleVar = "i am Global"
// console.log(globleVar);


// function modifyGlobal() {
//     globleVar = "I am  modify"
//     let blockScopevar = "I am block-scope"
//     console.log(globleVar);
// }
// modifyGlobal()

// ifee

// let config = function () {
//     let setting = {
//         theme: "dark"
//     }
//     return setting
// }()

// let person1 = {
//     name:"ravi",
//     greet: function(){
//         console.log(`hello ${this.name}`);

//     }
// }
// let person2 = {
//     name:"udit",
//     greet: function(){
//         console.log(`hello mistry${this.name}`);

//     }
// }


// const bindfreet = person1.greet.bind(person2) 

// console.log(bindfreet());

// //(() => { })()


let person1 = {
    personname: "udit",
    greet: function () {
        console.log(`name is ${this.personname}`);
    }
}
// person1.greet()

let person2 = {
    personname: "mistry",
}
person1.greet.call(person2)