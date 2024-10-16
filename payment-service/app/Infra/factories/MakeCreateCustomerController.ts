import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomerController } from "../controllers/customer.controller";
import { customerRepositoryFacade } from '../facades/repositories/customer.repository.facade';
import { CreateCustomerUseCase } from 'App/Application/usecases/customer/create-customer.usecase';

export default class MakeCreateCustomerController {
    async create(ctx: HttpContextContract) {
        const customerRepository = customerRepositoryFacade.getInstance()

        const createCartUsecase = new CreateCustomerUseCase(customerRepository)

        await CustomerController.create(ctx, createCartUsecase)
    }
}