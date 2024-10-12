import { InputCreateProductDto } from "src/application/dtos/create-product.dto";
import { CreateProductUseCaseContract } from "src/domain/usecases/product/create-product.usecase.contract";
import { ProductRepositoryContract } from "src/domain/usecases/product/repositories/product/product.repository.contract";

export class CreateProductUseCase implements CreateProductUseCaseContract {
    constructor(
        private readonly productRepositoryContract: ProductRepositoryContract
    ) {}
    async execute(data: InputCreateProductDto): Promise<void> {
        await this.productRepositoryContract.create(data);
        console.log(data);
    }
}