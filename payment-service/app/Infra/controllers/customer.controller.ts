import { CreateCustomerUsecaseContract } from "App/Domain/usecases/customer/create-customer.usecase.contract";

export class CustomerController {
    constructor() {}
    static async create(
        { request, response },
        createCustomerUsecase: CreateCustomerUsecaseContract
    ) {
        try {            
            const body = request.body()
            await createCustomerUsecase.execute(body)
            return response.status(201)
        } catch (error) {
            console.error(error)
            return response.status(500).send({ message: 'Error' })
        }
    }
}