interface ILogger {
    log(...args): void
    error(...args): void
}

class Logger implements ILogger {
   async error(...args): Promise<void> {
       console.log(...args);
   }

    log(...args): void {
    }

}
