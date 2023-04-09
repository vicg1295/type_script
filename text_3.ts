
interface paymant {
    sum: number,
    from: 2
    to: number
}

interface request extends paymant{}
enum PaymentStatus {
    Success = 'success',
    Failed = 'failed'
}

interface IDataSuccess {
    databaseId: number;
    sun: number,
    from: number,
    to: number,
}
interface IDataFailed {
    status: string,
    data:{
        errorMessage: string,
        errorCode: 4,
    }
}
interface response {
    status: PaymentStatus,
    data: IDataSuccess | IDataFailed
}


function fetch(request:request): response {
    return {}
}
