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
const sentence = "Hello Konexio !"
const lastIndex = sentence.length -1 
// log(sentence[lastIndex])
let result = ""
for(let i = lastIndex; i>=0; i--) {
    // log(i)
    // log(sentence[i])
    result += sentence[i]
}
log(result)


// 07 - Fizzbuzz
// for(let i = 0; i <=100; i++) {
// 	console.log(i)
//     let
//     if(){

//     }
// }
