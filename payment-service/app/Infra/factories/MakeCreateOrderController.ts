import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { OrderRepositoryFacade } from "../facades/repositories/order.repository.facade"
import { OrderController } from "../controllers/order.controller"
import { CreateOrderUseCase } from 'App/Application/usecases/order/create-order.usecase'
import { CartRepositoryFacade } from '../facades/repositories/cart.repository.facade'
import { AxiosHttpService } from '../services/http/axios.service'
import { QueueService } from '../services/queue/queue.sqs.service'
import { GetCartUseCase } from 'App/Application/usecases/cart/get-cart.usecase'
import { PaymentProviderIuguService } from '../services/payment-provider/payment-prodivder-iugu.service'

export default class MakeCreateOrderController {
    async create(ctx: HttpContextContract) {
        const orderRepository = OrderRepositoryFacade.getInstance()
        const cartRepository = CartRepositoryFacade.getInstance()
        const createOrderUseCase = new CreateOrderUseCase(orderRepository)

        const paymentProviderService = new PaymentProviderIuguService(
            new AxiosHttpService()
        )

        const queueService = new QueueService()
        const getCartUseCase = new GetCartUseCase(cartRepository)

        await OrderController.create(ctx, createOrderUseCase, paymentProviderService, queueService, getCartUseCase)
    }
}