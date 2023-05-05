type PaymantStatys = 'new' | 'payd';

class Payment0 {
    id: number;
    status: PaymantStatys = 'new';

    constructor(id: number) {
        this.id = id
    }

    pay() {
        this.status = 'payd'
    }
}

class PersistendPaymant extends Payment0 {
    databaseId: number;
    payAt: Date;
    constructor() {
        const id = Math.random()
        super(id)
    }
    save(){

    }
    override pay(date?: Date){
        super.pay()
        if(date){
            this.payAt = date;
        }

    }
}
//42
class User7 {
    name: string = 'user'
    constructor() {
        console.log(this.name);
    }
}

class Admin2 extends User7{
    name: string = 'admin'
    constructor() {
        super();
        console.log(this.name); //user
    }

}

new Admin2()

new Error() //

class HttpError extends Error{
    code: number
    constructor(message: string, code?:number) {
        super(message)
        this.code = code ?? 500;
    }
}
