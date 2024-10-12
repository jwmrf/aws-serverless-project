export type InputCreateProductDto = {
    name: string;
    description: string;
    salePrice: number;
    costPrice: number;
    quantity: number;
    deliveryPrice: number;
}

export type OutputCreateProductDto = {
    id: string;
    name: string;
    description: string;
    salePrice: number;
    costPrice: number;
    quantity: number;
    deliveryPrice: number;
}