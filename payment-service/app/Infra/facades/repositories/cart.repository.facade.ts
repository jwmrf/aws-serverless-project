import { CartRepositoryContract } from "App/Domain/repositories/cart/cart.repository.contract";
import { CartLucidRepository } from "App/Infra/database/lucid/cart/cart.lucid.repository";

export class CartRepositoryFacade {
    private static instance: CartRepositoryContract

    static getInstance(): CartRepositoryContract {

        if (!this.instance) {
            this.instance = new CartLucidRepository()
        }

        return this.instance
    }
}