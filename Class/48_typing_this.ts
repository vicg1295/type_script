class UserBuilder{
    name: string;

    setName(name: string ):this {
        this.name = name
        return this
    }
    isAdmin(): this is AdminBuilder{
        return this instanceof AdminBuilder;
    }
}

class AdminBuilder extends UserBuilder{
    // roles: string[]

}

const response = new UserBuilder().setName('Вася')
const response2 = new AdminBuilder().setName('Вася')

let user5: UserBuilder | AdminBuilder = new UserBuilder();


if(user5.isAdmin()){
    console.log(user5);
}else{
    console.log(user5);
}
