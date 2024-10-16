import { CartRepositoryContract } from "App/Domain/repositories/cart/cart.repository.contract";
import Cart from "App/Models/Cart";

export class CartLucidRepository implements CartRepositoryContract {
    async create(data: Partial<Cart>) {
        await Cart.create(data);
    }
    async get() {
        return 'Cart';
    }
}