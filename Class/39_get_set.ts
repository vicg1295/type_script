class User_38 {
    _login: string;
    password: string;


    set login(l: string) {
        this._login = 'user_' + l;
    }
    get login():string{
        return this._login
    }

}

const user_2 = new User_38()
user_2.login = 'new_login'
console.log(user_2.login);
