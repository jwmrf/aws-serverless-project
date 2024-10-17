import { OutputGetCartDto } from "App/Application/dtos/cart/get-cart.dto";
import { CartRepositoryContract } from "App/Domain/repositories/cart/cart.repository.contract";
import Cart from "App/Models/Cart";
import Customer from "App/Models/Customer";

export class CartLucidRepository implements CartRepositoryContract {
    async create(data: Partial<Cart>) {
        await Cart.create(data);
    }
    async get(id: string): Promise<OutputGetCartDto> {
        const cart = await Cart.query().where('id', id).first()

        const customer = cart?.customerId ? await Customer.query().where('id', cart.customerId).first() : null
        
        const cartData = {
            id: cart?.id ?? '',
            customerId: cart?.customerId ?? '',
            productId: cart?.productId ?? '',
            quantity: cart?.quantity ?? 0,
            totalAmount: cart?.totalAmount ?? 0,
            paymentMethod: cart?.paymentMethod ?? '',
            createdAt: new Date(),
        }
        
        if (!customer) {
            return {
                ...cartData,
                customer: {
                    id: '',
                    name: '',
                    email: ''
                }
            }
        }
        return {
            ...cartData,
            customer: {
                email: customer?.email ?? '',
                id: customer?.id ?? '',
                name: customer?.name ?? ''
            }
        }
    }
}