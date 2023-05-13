class UserServise {
    static db: any
    static getUser(id: number){
        return UserServise.db.findById(id)
        // return this.db.findById(id)
    }
    create(){
        UserServise.db
    }
    static { // if use UserServise. ...
        UserServise.db
    }
}

new UserServise()
UserServise.getUser(1)
