import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { OrderRepositoryFacade } from "../facades/repositories/order.repository.facade"
import { OrderController } from "../controllers/order.controller"
import { CreateOrderUseCase } from 'App/Application/usecases/order/create-order.usecase'

export default class MakeCreateOrderController {
    async create(ctx: HttpContextContract) {
        const orderRepository = OrderRepositoryFacade.getInstance()

        const createOrderUseCase = new CreateOrderUseCase(orderRepository)

        await OrderController.create(ctx, createOrderUseCase)
    }
}