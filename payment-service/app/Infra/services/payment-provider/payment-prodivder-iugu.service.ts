import { InputPaymentProviderDto, OutputPaymentProviderDto } from "App/Application/dtos/payment-provider/payment-provider.dto";
import { HttpServiceContract } from "App/Domain/services/http/http.service.contract";
import { PaymentProviderServiceContract } from "App/Domain/services/payment-service/payment-prodivder.service.contract";

export class PaymentProviderIuguService implements PaymentProviderServiceContract {
    constructor(
        private readonly httpService: HttpServiceContract
    ) {}
    async pay(data: InputPaymentProviderDto): Promise<OutputPaymentProviderDto> {
        try {
            // await this.httpService.post('http://localhost:3000/api/v1/payments', data, {})
            return {
                id: 'iugu-id',
                customer: {
                    name: data.customer.name,
                    email: data.customer.email
                },
                payment_method: {
                    type: data.payment_method.type
                },
                installments: data.installments,
                total: data.total,
                status: 'paid'
            }
        } catch (error) {
            console.error(error)
            throw new Error('Error')
        }
    }
}