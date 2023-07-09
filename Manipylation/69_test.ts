 interface Data  {
group: number;
name: string;
}
const data: Data[] = [
    {group: 1, name: 'a'},
    {group: 1, name: 'b'},
    {group: 2, name: 'c'},
]


 interface IGroup<T>  {
     [key: string]: T[]
 }
 type key = string | number | symbol;

 function groupObject<T extends Record<key, any>>(array: T[], key: keyof T):IGroup<T> {
    return array.reduce<IGroup<T>>((map: IGroup<T>, item)=>{
        const itemKey = item[key];
        let curElemetn = map[itemKey]

        if(Array.isArray(curElemetn)){
            curElemetn.push(item)
        }else{
            curElemetn = [item]
        }
        map[itemKey] = curElemetn
        return map
    },{})
 }

const res = groupObject(data, 'group')
 console.log(res);
