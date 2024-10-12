import { ProductRepositoryContract } from "src/domain/usecases/product/repositories/product/product.repository.contract";
import { ProductDynamoRepository } from "src/infra/database/dynamodb/product.dynamo.repository";

export class ProductRepositoryFacade {
    private static instance: ProductRepositoryContract
    public static getInstance() {
        if (!this.instance) {
            this.instance = new ProductDynamoRepository()
        }
        return this.instance
    }
}