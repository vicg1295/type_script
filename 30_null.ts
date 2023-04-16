const n: null = null;
const n1: any = null;        //     "strictNullChecks": false,    tsconfig.json
// const n2: number = null;     //     "strictNullChecks": false,    tsconfig.json
// const n3: string = null;     //     "strictNullChecks": false,    tsconfig.json
// const n4: number = null;     //     "strictNullChecks": false,    tsconfig.json
// const n5: undefined = null;  //     "strictNullChecks": false,    tsconfig.json

interface User{
    name: string;
}

function getUser () {
    if(Math.random()>0.5){
        return null
    }else{
        return{
            name: 'Вася'
        }
    }
}
export {}
const user = getUser();
if(user){
    const n55 = user.name;
}
