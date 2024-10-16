import { InputCreateOrderDto } from "App/Application/dtos/order/create-order.dto";

export interface CreateOrderUsecaseContract {
    execute: (data: InputCreateOrderDto) => Promise<void>
}