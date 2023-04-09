type httrMethod = 'post' | 'get';

type coolString = string;

function fetchWithAuth(url: string, method: httrMethod): 1 | -1 {
    return 1
}

fetchWithAuth('s', 'post')
export {};
let method = 'post';

fetchWithAuth('s', method as 'post')


type User = {
    name: string,
    age: number,
    skills: string[]
}
type Role = {
    id: number
}

type UserWithRole = User & Role;

let user: UserWithRole = {
    name: 'asd',
    age: 33,
    skills: ['1', '2'],
    id: 1,
}
