import { InputCreateCartDto } from "App/Application/dtos/cart/create-cart.dto";

export interface CreateCartUsecaseContract {
    execute: (data: InputCreateCartDto) => Promise<void>
}