import { GetProductDto } from "src/application/dtos/get-product.dto";

export interface GetProductUseCaseContract {
    execute(id : string): Promise<GetProductDto>
}