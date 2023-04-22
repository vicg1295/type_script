
export {}
class User {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
}

const user = new User('Vic')

console.log(user.name);
user.name="2222"
console.log(user.name);



class Admin {
    constructor(role) {
    this.role  = role
    }
    role: number;
}

const admin = new Admin(1)

admin.role = 2

console.log(admin);
