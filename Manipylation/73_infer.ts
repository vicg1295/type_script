function runTransaction(transaction: {
    fromTo: [string,string]
}){
    console.log(transaction);
}


// const transaction = {
//     fromTo:['1','2'] as [string, string] //харкод
// }


const transaction:GetFirstArg<typeof runTransaction> = {
    fromTo:['1','2'] as [string, string]
}

runTransaction(transaction)

type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never
