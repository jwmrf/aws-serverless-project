import { OutputListProductDto } from "src/application/dtos/list-product.dto";

export interface ListProductsUseCaseContract {
    execute(): Promise<OutputListProductDto[]>
}