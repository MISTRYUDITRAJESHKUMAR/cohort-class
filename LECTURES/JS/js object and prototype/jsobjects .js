const obj1 = {
    fname: "udit",
    lname: "mistry",
    getFullname:function(){
        return `${this.fname}${this.lname}`
    }
}


const obj2 = {
    fname: "adut",
    lname: "nayak"
}


const obj3 = new obj1     

console.log(obj1.getFullname());
console.log(obj2);
console.log(obj3);
