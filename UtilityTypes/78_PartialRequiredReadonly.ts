export interface User {
    name: string;
    age?:number;
    email: string;
}

//Partial - делает все свойства не обязательными
type partial = Partial<User>
const p: partial = {}

//required - все типы обезательными
export type required = Required<User>
//readonly - только для чтения
export type readonly = Readonly<User>


