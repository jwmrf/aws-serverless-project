import { InputCreateProductDto } from "src/application/dtos/create-product.dto";

export interface CreateProductUseCaseContract {
    execute(data: InputCreateProductDto): Promise<void>
}