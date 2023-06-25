//
interface Vehicle {
    run: number
}

function kmToMile<T extends Vehicle>(vehicale: T): T{
    vehicale.run = vehicale.run /0.62
    return vehicale
}

interface LCV extends Vehicle{
    capacity: number
}

// const vehicale = kmToMile(new Vehicle())
// const lcv = kmToMile(new LCV())

function logId<T extends string | number>(id: T){
    console.log(id)
    return id
}
