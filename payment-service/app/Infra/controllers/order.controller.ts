import { CreateOrderUsecaseContract } from "App/Domain/usecases/order/create-order.usecase.contract";

export class OrderController {
    constructor() {}
    static async create(
        { request, response },
        createOrderUsecase: CreateOrderUsecaseContract
    ) {
        try {
            const body = request.body()
            await createOrderUsecase.execute(body)
            return response.status(201)
        } catch (error) {
            console.error(error)
            return response.status(500).send({ message: 'Error' })
        }
    }
}