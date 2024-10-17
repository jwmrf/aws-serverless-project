import { OutputGetCartDto } from "App/Application/dtos/cart/get-cart.dto";

export interface GetCartUsecaseContract {
    execute(id: string): Promise<OutputGetCartDto | null>;
}