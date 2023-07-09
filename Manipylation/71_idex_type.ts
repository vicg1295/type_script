export interface Role {
    name: string;

}

export interface User {
    name: string;
    roles: Role[]
}

const user: User = {
    name: 'Вася',
    roles: []
}

const nameUser = user['name']
const rolesName = 'roles'



type rolesType = User['roles']
type rolesType2 = User[typeof rolesName]


type roleType = User['roles'][number];


