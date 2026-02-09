// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

function calculateFinalPrice(baseCost, discountPercentage, taxRate) {
  return baseCost - (baseCost / 100) * discountPercentage + ((baseCost - (baseCost / 100) * discountPercentage) * taxRate);
}
console.log(calculateFinalPrice(100, 10, 0.2));

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

function checkAccess(userName, password) {
    if (userName === "admin" && password === 123456) {
        console.log("Доступ разрешен");
    } else {
        console.log("Доступ запрещен");
    }
}
checkAccess("admin", 123456);

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

function getTimeOfDay(time) {
    switch (true) {
        case time <= 5:
            console.log("Ночь");
            break;
        case time <= 11:
            console.log("Утро");
            break;
        case time <= 17:
            console.log("День");
            break;
        case time <= 23:
            console.log("Вечер");
            break;
        default:
            console.log("Некорректное время");
    }
}

getTimeOfDay(2);

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

function findFirstEven(start, end) {
    for (i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i);
            break;
        } else {
            console.log("Чётных чисел нет");
        }
    }
}

findFirstEven(3, 10);