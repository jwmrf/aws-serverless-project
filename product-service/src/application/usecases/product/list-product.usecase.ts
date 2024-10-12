import { OutputListProductDto } from "src/application/dtos/list-product.dto";
import { ListProductsUseCaseContract } from "src/domain/usecases/product/list-products.usecase.contract";
import { ProductRepositoryContract } from "src/domain/usecases/product/repositories/product/product.repository.contract";

export class ListProductUseCase implements ListProductsUseCaseContract {
    constructor(
        private readonly productRepositoryContract: ProductRepositoryContract
    ) {}
    async execute(): Promise<OutputListProductDto[]> {
        const products =  await this.productRepositoryContract.list();
        return products as OutputListProductDto[];
    }
}