interface IPayment {
    sum: number,
    from: 2
    to: number
}

interface IPaymentRequest extends IPayment {

}

interface IDataSuccess extends IPayment {
    database: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}
//
// type f = (res: IResponseSuccess | IResponseFailed) => number;
//
// type res = IResponseSuccess | IResponseFailed
//
// function isSuccess(res: Res): res is IResponseSuccess {
//     if (res.status === PaymentStatus) {
//         return true
//     }
//     return false
// }
//
// function getIdFromData(res: Res): number {
//     if (isSucces(res)) {
//         return res.data.database
//     } else {
//         throw new Error(res.data.errorMessage)
//     }
// }
//
// function getIdFromDate(res: Res): number {
//
// }
