import { CustomerRepositoryContract } from "App/Domain/repositories/customer/customer.repository.contract";
import { CustomerLucidRepository } from "App/Infra/database/lucid/customer/customer.lucid.repository";

export class customerRepositoryFacade {

    static instance: CustomerRepositoryContract
    static getInstance(): CustomerRepositoryContract {
        if (!this.instance) {
            this.instance = new CustomerLucidRepository()
        }
        
        return this.instance
    }
}