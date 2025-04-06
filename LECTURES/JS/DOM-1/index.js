function changebg(color) {
    document.body.style.backgroundColor = color
}


function changebggreen() {
    document.body.style.backgroundColor = "green"
}






const orrangebtn = document.getElementById('orangemode')
orrangebtn.addEventListener('click', function () {
    changebg('orange')

})


// event litionot

// orrangebtn.addEventListener('click', function () {
//     console.log('storeing a data on database');

// })
// function changebg(color) {
//     document.body.style.backgroundColor = color
// }

// const themebtn = document.getElementById('themebtn')


// themebtn.addEventListener('click', () => {
//     // console.log(document.body.style.backgroundColor);
//     const currentColor = document.body.style.backgroundColor;

//     if (!currentColor || currentColor == "white") {
//         changebg('black')
//         themebtn.innerText = 'light mode'
//     } else {
//         themebtn.innerText = 'dark mode'
//         changebg('white')
//     }
// })




