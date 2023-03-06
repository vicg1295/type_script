function getFullName  (userEntity: {firstname:string,lastname:string}):string {
    return `${userEntity.firstname} ${userEntity.lastname}`
}
const user = {
    firstname: 'Антон',
    lastname: 'Ларин',
    city: 'Москва',
    age: 33,
}

console.log(getFullName(user));
