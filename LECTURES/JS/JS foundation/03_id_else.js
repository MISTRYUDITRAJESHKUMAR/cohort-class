// function prepareChai(type) {

//     if (type === "masala chai") {
//         console.log("Adding Spices to the chai");
//     }
//     else {
//         console.log("prepare regular");

//     }
// }
// prepareChai("masala chai")
// prepareChai("masala")



function calculatebill(amount) {
    const bill = Number(amount)
    //cunvert number 
    // if (bill > 1000) {
    //     return bill * 10 / 100 ?
    // }
    //2 nd way
    // ternory operator
    return bill > 1000 ? bill * 10 / 100 : bill

}
let finalbill = calculatebill(1200)
// console.log(finalbill);  


// console.log(calculatebill(1300));
// calculatebill("1001")


// function trafic_light_system(light) {
//     const lightcolour = String(light)
//     if (lightcolour === "red") {
//         console.log('Stop');
//     }
//     else if (lightcolour === "yellow") {
//         console.log('Slow down');
//     }
//     else if (lightcolour === "green") {
//         console.log('Go');
//     }
//     else {
//         console.log("see clolr first");
//     }
// }
// trafic_light_system('red')



// function traficlight(light) {
//     const stringing = String(light)
//     const color = stringing.toLowerCase()
//     switch (color) {
//         case "red":
//             console.log('Stop');
//             break
//         case "yellow":
//             console.log('Slow down');
//             break
//         case "green":
//             console.log('Go');
//             break
//         default:
//             console.log('Chalan Cart');

//     }
// }
// traficlight("RED")


// function chacktruthy(value){
//     if(value){
//         console.log("truthy");
//     }
//     else{
//         console.log("falsy");
//     }
// }
// chacktruthy([1,12])


function login(username, password, loginIp) {
    if (username === "admin" && (password === "1234" || loginIp == "127")) {
        console.log("login succsessfuly");
    }
    else {
        console.log("invalid credentiols");
    }
}
login("admin", "1234")