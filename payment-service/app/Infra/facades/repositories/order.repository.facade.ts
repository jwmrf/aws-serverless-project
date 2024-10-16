import { OrderRepositoryContract } from "App/Domain/repositories/order/order.repository.contract"
import { OrderLucidRepository } from "App/Infra/database/lucid/order/order.lucid.repository"

export class OrderRepositoryFacade {
    private static instance: OrderRepositoryContract

    static getInstance(): OrderRepositoryContract {

        if (!this.instance) {
            this.instance = new OrderLucidRepository()
        }

        return this.instance
    }

}