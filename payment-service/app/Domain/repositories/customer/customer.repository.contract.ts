import Customer from "App/Models/Customer";

export interface CustomerRepositoryContract {
    create: (data: Partial<Customer>) => Promise<void>;
}