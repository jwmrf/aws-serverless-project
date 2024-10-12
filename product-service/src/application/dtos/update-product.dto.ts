export type InputUpdateProductDto = {
    id: string;
    name: string;
    description: string;
    salePrice: number;
    costPrice: number;
    quantity: number;
    deliveryPrice: number;
}

export type OutputUpdateProductDto = {
    id: string;
    name: string;
    description: string;
    salePrice: number;
    costPrice: number;
    quantity: number;
    deliveryPrice: number;
}