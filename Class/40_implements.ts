interface ILogger {
    log(...args): void

    error(...args): void
}

class Logger_0 implements ILogger {
    async error(...args): Promise<void> {
        console.log(...args);
    }

    log(...args): void {
    }

}

interface IPayable {
    pay(paymethod: number): void

    price?: number
}

class User4 implements IPayable {
    pay(paymethodId: number | string): void { // -number
        //
    }

    // price?: number | undefined;
}
