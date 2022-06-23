const log = console.log

// 01 - Fruits
const fruits = ["mango", "lemon", "blueberry"]
// log(fruits)
// console.table(fruits)

// 02 - Access
const ingredients = ["eggs", "milk", "butter"]
// log(ingredients[1])
// log(ingredients.indexOf("butter"))

// 03 - Add and Remove
const objects = ["pen", "book", "lamp"]
// objects.unshift("chair")
// log(objects)
// objects.pop()
// log(objects)
// objects.push("laptop")
// log(objects)
// objects.shift()
// log(objects)

// 04 - Order
const numbers = [4, 10, 8, 12, 6]
// numbers.reverse()
// log(numbers)

// 05 - Boucle
// let total = 0
// const limit = 10

// avec un tableau
// const tab = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < tab.length; i++) {
//     total += tab[i]
//     log(total)
// }

// for (let i = 0; i <= limit; i++) {
    // log(i)
    // total = total + i
    // total += i
    // log(total)
// }

// 06 - Reverse
// const sentence = "Hello Konexio !"
// const lastIndex = sentence.length -1 
// // log(sentence[lastIndex])
// let result = ""
// for(let i = lastIndex; i>=0; i--) {
//     // log(i)
//     // log(sentence[i])
//     result += sentence[i]
// }
// log(result)


// 07 - Fizzbuzz
// for(let i = 0; i <=100; i++){
//     console.log(i)
//     if((i % 3 === 0) && (i % 5 === 0)) {
//         log("Fizzbuzz")
//     }else if (i % 5 === 0) {
//         log("Buzz")
//     }else if (i % 3 === 0) {
//         log("Fizz")
//     }else if (i % 7 !== 0) {
//         log("")
//     }else {
//         log(i)
//     }
// }

// 08 - While
// let total = 0
// const limit = 10
// let i = 0

// while(i < limit) {
//     // log(i)
//     i++
//     total += i
// }
// log(total)

// 09 - Sans boucle
// const names = ["prenom1", "prenom2", "prenom3", "prenom4", "prenom5", "prenom6", "prenom7", "prenom8", "prenom9", "prenom10", "prenom11", "prenom12", "prenom13", "prenom14", "prenom15", "prenom16", "prenom17", "prenom18", "prenom19", "prenom20"]
// solution 1
// const min = 0
// const max = names.length
// const random = Math.floor(Math.random() * max) + min
// let result = names[random]
// log(result)

// solution 2
// const random = Math.floor(Math.random() * names.length)
// let result = names[random]
// log(result)


// 10 - Random and max
let array = []

for(let i = 0; i <20; i++) {
    const min = 1
    const max = 101
    const random = Math.floor(Math.random() * max) + min
    array.push(random)
}
log(array)
