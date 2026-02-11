// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  name: "Murat",
  surname: "Mirgasimov",
  isProgrammer: true,
  hobby: "voleyball",
};

for (const key in person) {
  console.log(key, person[key]);
}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(object) {
  for (const emptyKey in object) {
    return false;
  }
  return true;
}
console.log(isEmpty(person));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "ttile",
  description: "description",
  isCompleted: true,
};

function cloneAndModify(object, modifications) {
  return { ...object, ...modifications };
}
const cloneObj = cloneAndModify(person, task);

for (const key in cloneObj) {
  console.log(key, cloneObj[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

// const callAllMethods = (object) => {};

function callAllMethods(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      obj[key]();
    }
  }
}

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};
callAllMethods(myObject);
