let numofguest = (39-29);

let pizasize;
//small<=2
//mediun<=5
// large

if (numofguest <= 2) {
    pizasize = "small"
    // console.log('you can order small');
} else if (numofguest <= 5) {
    // console.log('you can order mediun');
    pizasize = "medium"
}
else {
    // console.log('you can order large');
    pizasize = "large"
}

console.log(pizasize);
