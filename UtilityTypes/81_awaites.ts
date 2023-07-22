type A = Awaited<Promise<string>>

type A2 = Awaited<Promise<Promise<string>>>

export interface IMenu {
    name: string;
    url: string;
}

async function getMenu(): Promise<IMenu[]> {
    return [{name:'', url: ''}]
}

type R = Awaited<ReturnType<typeof getMenu>>

async function getArray2<T>(x: T): Promise<T[]>{
    return [await x]
}
