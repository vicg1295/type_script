class User{
    role?: 'admin' | 'user';
    // name: string;

    constructor(public name: string) {
        this.name = name
    }
}

function createUser(user: User){
    const  defaultUser = new User ('default');
    defaultUser.role= undefined
    switch (user.role){
        case 'admin':
            const a = 7
            break;
        case 'user':
            return true;
            // const c = 1
    }
}

interface IChecks {
    [check: string]: boolean
}

const c: IChecks= {'kpp': true}
const b = c['drive']
