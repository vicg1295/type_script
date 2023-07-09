class Resp<D, E> {
    data: D;

    error?: E;
    constructor(data: D, error: E) {
        if (data) this.data = data;
        if (error) this.error = error;
    }
}

const res_65 = new Resp<string, number> ('data', 0)



class HTTPresponse<F> extends Resp<string, number>{
    code: number;
    setCode(code, number){
        this.code = code
    }
}

const resp_2 = new HTTPresponse('data', 3)
