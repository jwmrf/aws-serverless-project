import { OrderRepositoryContract } from "App/Domain/repositories/order/order.repository.contract";
import Order from "App/Models/Order";

export class OrderLucidRepository implements OrderRepositoryContract { 
    async create(data: Partial<Order>): Promise<void> {
        await Order.create(data);
    }
}