const a1: number = Math.random() >0.5 ? 1: 0

interface HTTPResponse<T extends 'success' | 'failed'>  {
    code: number;
    data: T extends 'success' ? string: Error

}
const succes: HTTPResponse<'success'> = {
    code: 200,
    data: 'done'
}

const err: HTTPResponse<'failed'> = {
    code: 200,
    data: new Error()
}

class User {
    id: number;
    name: string;
}

class UserPersistend {
    dbId: string;
}

function getUser(dbIdOrId: string | number): User | UserPersistend {
    if(typeof dbIdOrId === 'number'){ //conditional
        return new User();
    } else {
        return new UserPersistend
    }
}



