function genereateError(message: string): never { //функция никогда ничего не возвращает
    throw new Error()
}

function dumpError(): never {
    while (true) {
    }
}

function rec(): never {
    return rec()
}

// const b: never = null; //error
const a: void = undefined;

type paymentAction = 'refund' | 'checkout'; // | 'reject

function processAction(action: paymentAction) {
    switch (action) {
        case "checkout":
            //
            break;
        case 'refund':
            //
            break;
        default:
            const _: never = action;
            throw new Error('нет такого actions')
    }
}


function isString(x: string | number): boolean {
    if (typeof x === "string") {
        return true
    } else if (typeof x === "number") {
        return false
    }
    throw new Error('asdfasdf')
}
