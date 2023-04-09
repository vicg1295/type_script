export {}
interface User{
    name: string

}

interface User {
    age: number
}

const user: User = {
    name: 'as',
    age: 33
}
console.log(user);




type User_1 = {
    name: string

}

// type User_1  = {
//     age: number
// }

const use_1: User_1 = {
    name: 'as',
//     age: 33
}
console.log(user);
