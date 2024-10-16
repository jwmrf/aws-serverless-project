import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import { CreateCartUseCase } from 'App/Application/usecases/cart/create-cart.usecase'
import { CartRepositoryFacade } from '../facades/repositories/cart.repository.facade'
import { CartController } from '../controllers/cart.controller'
export default class MakeCreateCartController {
    async create(ctx: HttpContextContract) {

        const cartRepsitory = CartRepositoryFacade.getInstance()
        
        const createCartUsecase = new CreateCartUseCase(cartRepsitory)

        await CartController.create(ctx, createCartUsecase)
    }
}