import { InputPaymentProviderDto, OutputPaymentProviderDto } from "App/Application/dtos/payment-provider/payment-provider.dto";

export interface PaymentProviderServiceContract {
    pay(data: InputPaymentProviderDto): Promise<OutputPaymentProviderDto>
}