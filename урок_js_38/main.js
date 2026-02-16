// Задание 1.
// Дан массив пользователей:
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

let sum = 0;

function getUserAverageAge(users) {
  if (users.length === 0) return 0;

  users.forEach((user) => {
    sum += user.age;
  });

  return sum / users.length;
}

console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

function getAllAdmins(users) {
  if (users.length === 0) return 0;

  let userName = "";
  users.forEach((user) => {
    if (user.isAdmin === true) userName += `${user.name} `;
  });

  return userName || "Админов нет";
}

console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

const numbers = [1, 2, 3, 4, 5, 6];

function first(arr, n) {
  if (n === 0) return [];
  else if (n === undefined) {
    arr.length = 1;
    return arr;
  } else if (n > arr.length) {
    console.error(
      `Число ${n} не может быть больше длины массива ${arr.length}`,
    );
    return;
  }
  const firstNumber = numbers.shift();
  return firstNumber;
}

console.log(first(numbers, 1));
