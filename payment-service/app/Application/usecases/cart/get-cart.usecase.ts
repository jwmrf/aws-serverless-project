import { OutputGetCartDto } from "App/Application/dtos/cart/get-cart.dto";
import { CartRepositoryContract } from "App/Domain/repositories/cart/cart.repository.contract";
import { GetCartUsecaseContract } from "App/Domain/usecases/cart/get-cart.usecase.contract";

export class GetCartUseCase implements GetCartUsecaseContract {
    constructor(
        private readonly cartRepository: CartRepositoryContract
    ) {}

    async execute(id: string): Promise<OutputGetCartDto | null> {
        const cart = await this.cartRepository.get(id)
        
        if (!cart) return null

        return cart
    }
}