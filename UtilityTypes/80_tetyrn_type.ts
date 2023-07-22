class User {
    constructor(public id: number, public name: string) {
    }
}

function getData(id: number):User {
    return new User(id, 'Вася')
}


type RT = ReturnType<typeof getData>
type RT2 = Parameters<typeof getData>
type RT3 = ReturnType<()=>void>
type RT4 = ReturnType<<T>()=>T>
type RT5 = ReturnType<<T extends string>()=>{}>

type PR = Parameters<typeof getData>[0]


type CP = ConstructorParameters<typeof User>
