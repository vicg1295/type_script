export {}
interface User {
    login: string,
    password?: string,
    // password: string | undefined, not correct
}

const user: User = {
    login: 'asdgf',
    // password: '1'
}

function multiplay(first: number, second?: number ): number{
    if(!second){
        return first*first
    }else{
        return first * second
    }
}





interface UserPro{
    login: string
    password?: {
        type: 'primary' | 'secondary'
    };
}

function testPassword (user: UserPro){
const t = user.password?.type
}
