import { InputCreateCartDto } from "App/Application/dtos/cart/create-cart.dto";
import { CartRepositoryContract } from "App/Domain/repositories/cart/cart.repository.contract";
import { CreateCartUsecaseContract } from "App/Domain/usecases/cart/create-card.usecase.contract";

export class CreateCartUseCase implements CreateCartUsecaseContract {
    constructor(
        private readonly cartRepository: CartRepositoryContract
    ) {}

    async execute(data: InputCreateCartDto) {
        await this.cartRepository.create(data)
    }
}