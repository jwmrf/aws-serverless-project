export type InputCreateCartDto = {
    customerId: string;
    productId: string,
    quantity: number,
    totalAmount: number,
    paymentMethod: string
}

export type Products = {
    id: string,
    name: string,
    quantity: string
}