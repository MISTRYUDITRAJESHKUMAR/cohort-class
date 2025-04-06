const person = {
    x: 10,
    fName: 'piyush',
    Lname: "garg",
    hobbies: ["coding", "hym"],
    isMarid: false,
    getFullname: function () {
        return "udit mistry"
    },
    adress: {
        hno: 1,
        stret: "gnagar",
        CountryCode: 5151,
        state: "Guj"
    }
}



const remote = {
    color: "black",
    brand: "xyz",
    dimansity: {
        height: 1,
        width: 12
    },
    vlumeUp: function () {

    }
}
// console.log(person.adress.state);

let fName = 'udit'
let fName2 = fName

fName2 = "adit"


// console.log(fName2);
// console.log(fName);



let p1 = {
    fname: "hitesh",
    lname: "Ch"
}

// let p2 = p1


// p2.fname = "udit"


let p2 = {
    fName: p1.fname,
    lname: p1.lname
}

p2.lname = "udityyaaa"

console.log(p1);
console.log(p2);

let p5 = {
    ...p1//spred opereator
}
console.log(p1);

const p1kastring = JSON.stringify(p1)
console.log(p1kastring);
let p2 = JSON.parse(p1kastring)
