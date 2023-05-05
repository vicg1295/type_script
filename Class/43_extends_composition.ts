class User_8 {
    name: string

    constructor(name: string) {
        this.name = name
    }
}

class Users_2 extends Array<User_8> {
    searchByName(name: string) {
        return this.filter(u => u.name === name)
    }

    override toString(): string {
        return this.map(u => u.name).join(', ')
    }
}

const users = new Users_2()

users.push(new User_8('Вася'))
users.push(new User_8('Петя'))

console.log(users.toString());

//так было не верно

class UserList {
    users: User_8[]

    push(u: User_8) {
        this.users.push(u)
    }
}

class Payment {
    date: Date;
}

class UsersWithPayment extends Payment {
    name: string;
}

class UsersWithPayment2 {
    user: User;
    payment: Payment;

    constructor(user: User, payment: Payment) {
        this.payment = payment
        this.user = user
    }

}

