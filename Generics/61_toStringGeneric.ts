function toString<T>(data: T): string | undefined {
    if (typeof data === "string") {
        return data.toString()
    } else if (typeof data === "number") {
        return `${data}`
    }else if (typeof data === "object"){
        return JSON.stringify(data)
    } else if (data?.toString()){
        return data.toString()
    }else{
        return undefined
    }
}

console.log( toString(3))
console.log( toString(true))
console.log( toString([1,2,3,4]))
console.log( toString({a: 'sdfsdfgsdfg'}))
