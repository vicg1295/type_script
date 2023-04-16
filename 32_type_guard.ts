export {}

interface User {
    name: string;
    email: string;
    login: string;
}

const user:User = {
    name: 'Вася',
    email: 'Вася',
    login: 'Вася',
}

const user_2: Admin= {
    name: 'Петя',
    role: 1
}

interface Admin {
    name: string;
    role: number;
}

// тайп гарды функции проверки сложных типов
function LogId(id: string | number) {
    if (isString(id)) {
        console.log(id);
    } else {
        console.log(id);
    }
    console.log(id);
}

function isString(x: string | number): x is string {// тайп гард
    return typeof x === "string"
}

function isAdmin(user: User |Admin): user is Admin {// тайп гард
    return 'role' in user
}

console.log(isAdmin(user_2));

setRoleZero(user_2)

function setRoleZero(user: User | Admin) {
    if (isAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error('пользователь не админ ')
    }
}

function isAdminAlternative(user: Admin|User):user is Admin{
    return (user as Admin).role !== undefined
}








