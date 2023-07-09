type Modifier = 'read' | 'update' | 'create'


type UserRoles = {
    customers: Modifier,
    projects?:Modifier,
    adminPanel?: Modifier,
    //если добавиться свойство то нужно будет добавлять его как булиан и в UserAccess1
}

//если добавиться свойство то нужно будет добавлять его как булиан и в UserAccess1
type UserAccess1 = {
    customer?: boolean,
    projects?:boolean,
    adminPanel?: boolean,
}

//мапинг позволяет получать новый тип из старого
type ModifierToAccess<Type> = {
 [Ptoperty in keyof Type]:boolean;
}

type UserAccess2 = ModifierToAccess<UserRoles>;



