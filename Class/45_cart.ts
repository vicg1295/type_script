enum DeliveryType {
    Addres,
    Home
}

interface ProductInterface {
    id: number,
    prise: number,
    name: string,
}

class Cart {
    private Products: ProductInterface[] = []
    private delivery: DeliveryType

    addProduct(product: ProductInterface) {
        this.Products.push(product)
    }

    deleteProduct(ProductId:number):void {
        this.Products = this.Products.filter((p:ProductInterface)=>p.id !== ProductId)
    }

    sumCart():number {
        let summ = 0
        this.Products.forEach(product => {
            summ += product.prise
        })
        return summ
    }
}
