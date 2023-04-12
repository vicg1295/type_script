let input: unknown; //более строгий чем any;
// input = 3;
// input= ['sf', 'sdf'];

//let input: any; оштибки не будет
// let res:string = input;

let res = input;

function run(i: unknown) {
    if (typeof i === 'number') {
        i++
    } else {
        i
    }
}

run(input)

async function getData() {
    try {
        await fetch('')
    } catch (e) {
        if(typeof e === 'object'){
                console.log(e);
        }
    }
}

type U1 = unknown | number; // unknown

type I1 = unknown & string; //string
