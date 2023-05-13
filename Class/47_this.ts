class Payment_3{
    private date: Date = new Date()
    getDate(this: Payment_3){ //задать контекст this относительно только текущего объекта
        return this.date
    }
    getDateArrow = ()=>this.date
}

const p = new Payment_3()



const user1 = {
    id: 1,
    paymentDate: p.getDate.bind(p), // this.date = user1.getDate = undefined
    getDateArrow: p.getDateArrow // this.date = user1.getDate = undefined
}

// console.log(p.getDate());
// console.log(user1.paymentDate());
// console.log(user1.getDateArrow());


class PaymentPersistent extends Payment_3 {
    save (){
        return this.getDateArrow() //supet.getDateArrow() error
    }
}

console.log(new PaymentPersistent().save());
