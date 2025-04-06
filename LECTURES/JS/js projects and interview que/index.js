

// function renderToScreen(obj) {
//     const products = obj.data.data
//     console.log(products);
//     products.forEach((product) => {
//         //crete li in ul
//         const li = document.createElement("li")
//         li.innerHTML = product.title
//         //adding in 
//         items.appendChild(li)
//     });
// }
// fetch("https://api.freeapi.app/api/v1/public/randomproducts")
//     .then((response) => response.json())
//     .then(renderToScreen)
//     .catch((err) => { })
//     .finally(() => { })


// function adding(obj) {
//     const products = obj.data.data
//     console.log(products);
//     products.forEach((product) => {
//         const li1 = document.createElement("li")
//         li1.innerText = product.categories 
//         items.appendChild(li1)

//         const li2 = document.createElement("li")
//         li2.innerText = product.id
//         items.appendChild(li2)

//         const li3 = document.createElement("li")
//         li3.innerText = product.content
//         items.appendChild(li3)

//         const hr = document.createElement("hr")
//         items.appendChild(hr)

//     });


// }

// fetch("https://api.freeapi.app/api/v1/public/randomjokes")
//     // cunverting to object from json
//     .then((res) => res.json())
//     .then(adding)
//     .catch(() => { })
//     .finally(() => { })




