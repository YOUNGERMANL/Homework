// let объявляет переменные, которые можно изменить в любой момент, а const объявляет неизменные переменные
const name = 'Murat'
let age = 19
let height = 193
let weight = 82
let favoriteColor = 'black'

console.log('My name is', name, 'I am', age, 'y.o', height, weight, favoriteColor)


function nameSpace(name) {
    return `Привет' "${name}"`;
}

let userName = 'Максим'
let createName = nameSpace(userName)
console.log(createName)


const sumNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function checkingTheItem(array) {
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
}

checkingTheItem(sumNumbers)



function calculator(firstNumber, secondNumber, operator) {
    if (operator === 'minus') {
        return firstNumber - secondNumber
    } else if (operator === 'plus') {
        return firstNumber + secondNumber
    } else if (operator === 'multiplication') {
        return firstNumber * secondNumber
    } else if (operator === 'division') {
        return firstNumber / secondNumber
    } else {
        return 'Error: unknown operator'
    }
}

const result = calculator(2, 3, 'minus')
console.log(result)