import { randomUUID } from "crypto"

export class Product {
    public id?: string
    public createdAt?: string
    public updatedAt?: string

    constructor(
        public name: string,
        public description: string,
        public salePrice: number,
        public costPrice: number,
        public quantity: number,
        public deliveryPrice: number,
        id?: string
    ) {
        this.id = id ?? randomUUID()
        
        this.createdAt = new Date().toISOString()
        this.updatedAt = new Date().toISOString()
    }
}