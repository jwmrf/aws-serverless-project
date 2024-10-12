import { InputUpdateProductDto } from "src/application/dtos/update-product.dto";

export interface UpdateProductUseCaseContract {
    execute(data: InputUpdateProductDto): Promise<void>
}