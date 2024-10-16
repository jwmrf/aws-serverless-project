import { InputCreateOrderDto } from "App/Application/dtos/order/create-order.dto";
import { OrderRepositoryContract } from "App/Domain/repositories/order/order.repository.contract";
import { CreateOrderUsecaseContract } from "App/Domain/usecases/order/create-order.usecase.contract";

export class CreateOrderUseCase implements CreateOrderUsecaseContract {
    constructor(
        private readonly orderRepository: OrderRepositoryContract
    ) {}

    async execute(data: InputCreateOrderDto): Promise<void> {
        await this.orderRepository.create(data)
    }
}