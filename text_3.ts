
interface Paymant {
    sum: number,
    from: 2
    to: number
}

interface IPaymentRequest extends Paymant{}
enum PaymentStatus {
    Success = 'success',
    Failed = 'failed'
}

// interface IDataSuccess {
// status: string,
//     databaseId: number;
//     sun: number,
//     from: number,
//     to: number,
// }
// interface IDataFailed {
//     status: string,
//     data:{
//         errorMessage: string,
//         errorCode: 4,
//     }
// }
// interface IResponse {
//     status: PaymentStatus,
//     data: IDataSuccess | IDataFailed
// }



interface IDataSuccess extends Paymant{
    status: PaymentStatus.Success,
}
interface IDataFailed {
    status: PaymentStatus.Failed,
    data:{
        errorMessage: string,
        errorCode: 4,
    }
}
