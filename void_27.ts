export {}
function LogId(id: string | number): void {
    console.log(id)
}

const a = LogId(2)

function multiply(f: number, s: number): number | void {
    if (!s) {
        return s * s
    } else {
        // return f * s
    }
}

type voidFunc = () => void;

const f1: voidFunc = () => {
}
const f2: voidFunc = () => true

const b = f2()


const skills = ['Dev', 'DevOps' ]

const user = {
    s: ['s']
}
skills.forEach((skills):void=> {
    user.s.push(skills)
})
console.log(user);
