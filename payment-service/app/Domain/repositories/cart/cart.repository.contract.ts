import { OutputGetCartDto } from "App/Application/dtos/cart/get-cart.dto";
import Cart from "App/Models/Cart";
import Customer from "App/Models/Customer";

export interface CartRepositoryContract {
    create: (data: Partial<Cart>) => Promise<void>
    get: (id: string) => Promise<OutputGetCartDto>
}