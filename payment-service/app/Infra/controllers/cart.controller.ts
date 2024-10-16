import { CreateCartUsecaseContract } from "App/Domain/usecases/cart/create-card.usecase.contract";

export class CartController {
    constructor() {}
    static async create(
        { request, response },
        createCartUsecase: CreateCartUsecaseContract
    ) {
        const body = request.body()

        try {
            await createCartUsecase.execute(body)
        } catch (error) {
            console.error(error)
            response.status(500).send({ message: 'Error' })
            
        }
    }
}