const user = {
    name: 'Murat',
    age: 19,
    isAdmin: true
}

console.log(`Hello, ${user.name}`)

const users = [
    {
        name: 'Alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'John',
        age: 30,
        isAdmin: true
    },
    {
        name: 'Tom',
        age: 25,
        isAdmin: true
    },
    {
        name: 'Ivan',
        age: 31,
        isAdmin: false
    }
]

let numberOfOrdinaryUsers = 0

function checkingOrdinaryUsers(users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].isAdmin === false) {
            numberOfOrdinaryUsers = numberOfOrdinaryUsers + 1
        }
    }
}

checkingOrdinaryUsers(users)
console.log(numberOfOrdinaryUsers)