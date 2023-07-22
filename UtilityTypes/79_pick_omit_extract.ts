interface PaymentPersistent {
    id: number
    sum: number
    from: string
    to: string
}


type Payment = Omit<PaymentPersistent, 'id'> // удаляет id
type PaymentRequisits = Pick<PaymentPersistent, 'from' | 'to'> // вітягивает только  from to

type ExtractType = Extract<'from' | 'to' | Payment, string>
type ExcludeType = Exclude<'from' | 'to' | Payment, string>
