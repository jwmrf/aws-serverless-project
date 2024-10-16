import { InputCreateCustomerDto } from "App/Application/dtos/customer/create-customer.dto";

export interface CreateCustomerUsecaseContract {
    execute: (data: InputCreateCustomerDto) => Promise<void>;
}