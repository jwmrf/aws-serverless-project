import { customerRepositoryContract } from "App/Domain/repositories/customer/customer.repository.contract";
import Customer from "App/Models/Customer";

export class CustomerLucidRepository implements customerRepositoryContract {
    async create(data: Partial<Customer>) {
        await Customer.create(data);
    }
}