// let salesData = [
//     { products: "laptop", price: 1000 },
//     { products: "toycar", price: 1500 },
//     { products: "game", price: 5000 },
// ]

// let initiolVal = 0
// let totalSales = salesData.reduce((acc, sale) => acc + sale.price, initiolVal)
// console.log(totalSales);


//item less than 50
// let inventory = [
//     { name: "width A", stock: 30 },
//     { name: "width B", stock: 100 },
//     { name: "width C", stock: 100 },
//     { name: "width D", stock: 70 },
//     { name: "width E", stock: 40 },
// ]

// let lowstock = inventory.filter((item) => {
//     return item.stock < 50
// })
// console.log(lowstock);


// let activeuserfind = [
//     { name: "user A", activiy: 30 },
//     { name: "user B", activiy: 700 },
//     { name: "user C", activiy: 100 },
//     { name: "user D", activiy: 70 },
//     { name: "user E", activiy: 40 },
// ]

// let active = activeuserfind.reduce((maxUser, user) => user.activiy > maxUser.activiy ? user : maxUser)

// console.log(active);



// let expences = [
//     { description: "Grosere", amount: 120, category: "food" },
//     { description: "Electricity bill", amount: 800, category: "utilitis" },
//     { description: "dinner", amount: 120, category: "food" },
//     { description: "internet bill", amount: 500, category: "utilitis" },
// ]
// let expenceReport = expences.reduce((report, expense) => {

// })



// let expenceReport = expences.reduce((report, expense) => {
//     report[expense.category] += expense.amount
//     return report
// }, { food: 0, utilitis: 0 })

// console.log("expence report", expenceReport);





// let task = [
//     { description: "writing report", completed: false, priority: 2 },
//     { description: "send email", completed: true, priority: 3 },
//     { description: "prepare presentation", completed: false, priority: 1 },
// ]


// let pendingSortedtask = task
//     .filter((task) => !task.completed)
//     .sort((a, b) => a.priority-b.priority)
//     console.log(pendingSortedtask);



// let movierating = [
//     { title: "movie A", ratings: [4, 5, 5] },
//     { title: "movie B", ratings: [4, 8, 9] },
//     { title: "movie C", ratings: [2, 5, 9] },
// ]

// let averageRatings = movierating.map((movie) => {
//     let total = movie.ratings.reduce((sum, rating) => sum + rating, 0)
//     let average = total / movie.ratings.length
//     return { title: movie.title, averageRatings: average.toFixed(2) }
// })

// [{ title: "movie a", ratings: 3.3 }, {}]


// const coding = ["ks", "python", "c", "c++", "ruby"]

// const values = coding.forEach((items) => {
//     console.log(items);
//     return items
// })
// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6]
// let newnums = myNums.filter((num) => {
//     return  num > 4
// })
// console.log(newnums);

// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);


// const book = [
//     { title: "book a", genre: 'hisoty', publish: 1960 },
//     { title: "book b", genre: 'scince', publish: 1920 },
//     { title: "book c", genre: 'non-fiction', publish: 1950 },
//     { title: "book d", genre: 'fiction', publish: 1966 },
//     { title: "book e", genre: 'science', publish: 2020 },
// ]

// const userbooks = book.filter((bk) =>  bk.genre == 'science' )
// const userbooks = book.filter((bk) => { return bk.publish <= 2000 })
// console.log(userbooks);



// const addedval = mynum.map((num) => num + 10)

// const newNums = mynum
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num >= 41)
// console.log(newNums);


// const mynum = [1, 2, 3, 4, 5, 6, 7]
// const initioalval = 0
// const sumnumbers = mynum.reduce((acc, current) => acc + current, 0)
// console.log(sumnumbers);



// const mynum = [1, 2, 3]

// const total = mynum.reduce((acc, crr) => {
//     console.log(`current val is accumlator is ${acc} and the current val is ${crr}`);
//     return acc + crr

// }, 0)
// // const sum = `current val is accumlator is ${acc} and the current val is ${crr}`
// console.log(total);



// const shopingcart = [
//     {
//         itemName: "js cource",
//         price: 2999
//     },
//     {
//         itemName: "java",
//         price: 8999
//     },
//     {
//         itemName: "ruby",
//         price: 3999
//     },
//     {
//         itemName: "c",
//         price: 1999
//     }
// ]

// const addValues = shopingcart.reduce((see, item) => see + item.price, 0)
// console.log(addValues);





// let expence = [
//     { description: "growsere", amount: 50, catagory: "food" },
//     { description: "electrisity bill", amount: 500, catagory: "utilities" },
//     { description: "dinner", amount: 250, catagory: "food" },
//     { description: "internet bill", amount: 2550, catagory: "utilities" },
// ]


// const allexpences = expence.reduce((acc, crr) => {
//     // acc[crr.catagory] += crr.amount
//     acc[crr.catagory] = (arr[crr.catagory] || 0) + crr.amount
//     return acc
// }, { food: 0, utilities: 0 })

// console.log("Expencese Report", allexpences);



// let tasks = [
//     {
//         description: "write report", cumpleted: true, priority: 2
//     },
//     {
//         description: "send email", cumpleted: false, priority: 1
//     },
//     {
//         description: "prepare presentation", cumpleted: true, priority: 3
//     },
// ]

// const pandingTask = tasks
//     .filter((task) => {
//         return !task.cumpleted
//     })
//     .sort((a, b) => {
//         return a.priority - b.priority
//     })

// console.log(pandingTask);


let movieratings = [
    {
        title: "movie A",
        ratings: [5, 6, 1]
    },
    {
        title: "movie B",
        ratings: [4, 5, 1]
    },
    {
        title: "movie C",
        ratings: [9, 6, 1]
    },
]

const averageratings = movieratings.map((average) => {
    let total = average.ratings.reduce((acc, crr) => acc + crr, 0)
    let averaging = total / average.ratings.length
    return { title: average.title, averageratings: averaging.toFixed(2) }
})

console.log(averageratings);
// [{title:"Movie a",ratings : 3.3},{}]