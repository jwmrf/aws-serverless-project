import { InputUpdateProductDto } from "src/application/dtos/update-product.dto";
import { ProductRepositoryContract } from "src/domain/usecases/product/repositories/product/product.repository.contract";
import { UpdateProductUseCaseContract } from "src/domain/usecases/product/update-product.usecase.contract";

export class UpdateProductUseCase implements UpdateProductUseCaseContract {
    constructor(
        private readonly productRepositoryContract: ProductRepositoryContract
    ) {}
    async execute(data: InputUpdateProductDto): Promise<void> {
        await this.productRepositoryContract.update(data);
        console.log(data);
    }
}