export type OutputGetCartDto = {
    id: string
    customerId: string;
    productId: string,
    quantity: number,
    totalAmount: number,
    paymentMethod: string,
    createdAt: Date,
    customer?: {
        id: string
        name: string
        email: string
    }
}