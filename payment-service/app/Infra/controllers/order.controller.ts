import { GetCartUseCase } from "App/Application/usecases/cart/get-cart.usecase";
import { PaymentProviderServiceContract } from "App/Domain/services/payment-service/payment-prodivder.service.contract";
import { QueueServiceContract } from "App/Domain/services/queue/queue.service.contract";
import { CreateOrderUsecaseContract } from "App/Domain/usecases/order/create-order.usecase.contract";

export class OrderController {
    constructor() {}
    static async create(
        { request, response },
        createOrderUsecase: CreateOrderUsecaseContract,
        paymentProviderService: PaymentProviderServiceContract,
        QueueService: QueueServiceContract,
        getCartUseCase: GetCartUseCase
    ) {
        const body = request.body()

        try {

            const { cartId, paymentMethod, installments } = body

            const cart = await getCartUseCase.execute(cartId)

            const payment = await paymentProviderService.pay({
                customer: {
                    email: cart?.customer?.email ?? '',
                    name: cart?.customer?.name ?? ''
                },
                payment_method: {
                    type: paymentMethod
                },
                installments,
                total: cart?.totalAmount ?? 0
            })

            await createOrderUsecase.execute({
                cartId,
                paymentDate: new Date(),
                paymentMethod,
                paymentStatus: payment.status
            })

            await QueueService.send({
                email: cart?.customer?.email ?? '',
                name: cart?.customer?.name ?? '',
                purchaseTotalAmount: cart?.totalAmount ?? 0,
                purchaseDate: JSON.stringify(cart?.createdAt ?? new Date()),
                paymentMethod
            })

            return response.status(200)
        } catch (error) {
            console.error(error)
            return response.status(500).send({ message: 'Error' })
        }
    }
}