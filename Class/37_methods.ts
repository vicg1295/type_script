enum PaymentStatus {
    Holder,
    Processed,
    Reversed,
}

class Payment {
    id: number;
    status: PaymentStatus;
    createdAt: Date;
    updateAt: Date;

    constructor(id: number) {
        this.id = id
        this.createdAt = new Date()
        this.status = PaymentStatus.Holder
    }

    getPaymentLeftTime(): number {
        return new Date().getTime() - this.createdAt.getTime()
    }

    unholdPayment() {
        if (this.status == PaymentStatus.Processed) {
            throw new Error('Платёж не можит быть возвращён!')
        }
        this.status = PaymentStatus.Reversed;
        this.updateAt = new Date()
    }
}

const payment = new Payment(1)

payment.unholdPayment()
console.log(payment);
const time = payment.getPaymentLeftTime()

console.log(time);
