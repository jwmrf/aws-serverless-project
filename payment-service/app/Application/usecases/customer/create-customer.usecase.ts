import { InputCreateCustomerDto } from "App/Application/dtos/customer/create-customer.dto";
import { CustomerRepositoryContract } from "App/Domain/repositories/customer/customer.repository.contract";
import { CreateCustomerUsecaseContract } from "App/Domain/usecases/customer/create-customer.usecase.contract";

export class CreateCustomerUseCase implements CreateCustomerUsecaseContract {
    constructor(
        private readonly customerRepository: CustomerRepositoryContract
    ) {}
    async execute(data: InputCreateCustomerDto): Promise<void> {
        await this.customerRepository.create(data)
    }
    
}