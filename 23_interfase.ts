interface User  {
    name: string,
    age: number,
    skills: string[]
}

interface UserWithRole extends User{
    roleId: number
}

let user_0: UserWithRole = {
    name: 'asd',
    age: 33,
    skills: ['1', '2'],
    roleId: 1
}

interface UserDic  {
    [index: number]: User
}

type UserDic2 = {
    [index: number]: User
}

