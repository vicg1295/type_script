//сложный тип юнионы
const arr = ['asdf', 1]

function logId(id: string | number | boolean) {
    if(typeof id === "string"){
        console.log(id.toLowerCase());
    }else{
        console.log(id);
    }

}

logId(1)
logId('sdfSDFGSDFGgdf')
logId(true)


function LogError(err: string | string[]) {
    if(Array.isArray(err)){
        console.log('Масив', err);
    }else{
        console.log('Строка', err);
    }
}

function LogObject(obj: {a: number }|{b: number}) {
    if('a'in obj){
        console.log(obj.a);
    }else{
        console.log(obj.b);
    }
}

function logMultipleIds(a: number | string, b:string | boolean) {
    if(typeof a === typeof b ){
        console.log('test_1');
    }else{
        console.log('test_2');
    }
}


logMultipleIds('asdfasdfasfd', 'true')
