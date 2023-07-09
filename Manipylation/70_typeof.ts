let strOrNumber: string | number = 5

if (Math.random() > 0.5 ){
    strOrNumber = 5

}else {
    strOrNumber = 'str'
}

if(typeof strOrNumber === 'string'){
    console.log(strOrNumber);
}else{
    console.log(strOrNumber);
}

let str2OrNumber: typeof strOrNumber

const User111= {
    name: 'Вася'
}

type keyOfUser = keyof typeof User111;

enum Direction {
    Up,
    Down
}

type d = keyof typeof Direction
