import Order from "App/Models/Order";

export interface OrderRepositoryContract {
    create: (data: Partial<Order>) => Promise<void>;
}