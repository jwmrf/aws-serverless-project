import { DeleteProductUseCaseContract } from "src/domain/usecases/product/delete-product.usecase";
import { ProductRepositoryContract } from "src/domain/usecases/product/repositories/product/product.repository.contract";

export class DeleteProductUseCase implements DeleteProductUseCaseContract {
    constructor(
        private readonly productRepositoryContract: ProductRepositoryContract
    ) {}
    async execute(id : string): Promise<void> {
        await this.productRepositoryContract.delete(id);
    }
}