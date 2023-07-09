function logMiddlewere1<T>(data: T): T{
    console.log(data);
    return data
}

const res = logMiddlewere1<string>('10')

function splitHouse<T>(data: Array<T>): Array<T>{
    const L = data.length/2
    return data.splice(0, L)
}
