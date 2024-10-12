import { GetProductDto } from "src/application/dtos/get-product.dto";
import { GetProductUseCaseContract } from "src/domain/usecases/product/get-product.usecase.contract";
import { ProductRepositoryContract } from "src/domain/usecases/product/repositories/product/product.repository.contract";

export class GetProductUseCase implements GetProductUseCaseContract {
    constructor(
        private readonly productRepositoryContract: ProductRepositoryContract
    ) {}
    async execute(id : string): Promise<GetProductDto> {
        const product =  await this.productRepositoryContract.get(id);
        return product as GetProductDto;
    }
}