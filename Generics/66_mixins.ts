type Constructor = new (...arg: any[]) => {}
type GConstructor<T = {}>  = new (...args: []) => T

class List {
    constructor(public items: string[]) {}
}

type ListType = GConstructor<List>;


// class ExtendListClass extends List {
//     first(){
//         return this.items[0]
//     }
// }

function ExtendList<TBase extends ListType>(Base: TBase){
        // @ts-ignore
    class ExtendList extends Base{
        first(){
            return this.items[0]
        }
    }
}
