//90 - >= A
//80 >= b
//70 >= C
//60 >= D
//50 fail
function gradCal(marks) {
    if (marks >= 90) {
        return "A"
    }
    else if (marks >= 80) {
        return "B"
    }
    else if (marks >= 70) {
        return "C"
    }
    else if (marks >= 60) {
        return "D"
    }
    else {
        return "FAIL"
    }
}
// console.log(gradCal(25));
gradCal()
let grad = gradCal(5)
// console.log(grad);


