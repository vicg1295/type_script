function logMiddlewere<T>(data: T): T {
    console.log(data);
    return data
}

// const res = logMiddlewere<string>('10')

function getSplitHouse<T>(data: Array<T>): Array<T> {
    const L = data.length / 2
    return data.splice(0, L)
}

const split: <T>(data: Array<T>) => Array<T> = getSplitHouse;

interface ILogoLine<T> {
    timeStamp: Date;
    data: T
}

type LogoLineType<T> = {
    timeStamp: Date;
    data: T
}


const logLine: LogoLineType<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}
