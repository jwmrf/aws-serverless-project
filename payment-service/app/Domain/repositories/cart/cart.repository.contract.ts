import Cart from "App/Models/Cart";

export interface CartRepositoryContract {
    create: (data: Partial<Cart>) => Promise<void>
}