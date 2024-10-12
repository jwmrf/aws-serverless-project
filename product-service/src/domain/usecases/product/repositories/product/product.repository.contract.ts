import { Product } from "src/domain/entities/product";

export interface ProductRepositoryContract {
    create(data: Product): Promise<void>;
    update(data: Product): Promise<void>;
    list(): Promise<Product[]>;
    get(id: string): Promise<Product>;
    delete(id: string): Promise<void>;
}