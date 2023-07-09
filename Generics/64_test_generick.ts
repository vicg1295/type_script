const data = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 3, name: 'Надя'},
]

interface ID {
    id: number,
}


function sort<T extends ID>(arr: T[], type: 'asc' | 'desc' = 'asc'): T[] {
    return arr.sort((a, b) => {
        switch (type) {
            case "asc":
                return a.id - b.id
            case "desc":
                return b.id - a.id
        }
    })
}

console.log(sort(data));
console.log(sort(data, 'asc'));
console.log(sort(data, 'desc'));
