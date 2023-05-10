class Vehicle {
    mark: string
    private damages: string[]
    private _model: string
    protected run: number
    #price: number
    addDamage(damages: string){
        this.damages.push(damages)
        this.run
    }
    set model (m: string){
        this._model = m
    }
}

new Vehicle().mark = 'd'


class EuroTruck extends Vehicle{
    setRun(km:number){
        this.run = km/0.62
        //this.damage
    }
}

// new EuroTruck().
