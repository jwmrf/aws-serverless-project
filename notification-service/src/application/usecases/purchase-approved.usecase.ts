import { PurchaseApprovedUseCaseContract } from "src/domain/usecases/email/purchase-approved.usecase.contract";
import { InputPurchaseApprovedDto } from "../dtos/purchase-approved.dto";
import { EmailNotificationServiceContract } from "src/domain/service/notification/email-notification.service.contract";

export class PurchaseApprovedUseCase implements PurchaseApprovedUseCaseContract {
    constructor(
        private readonly emailNotificationService: EmailNotificationServiceContract
    ) {}
    async execute(data: InputPurchaseApprovedDto): Promise<void> {
        await this.emailNotificationService.send({
            name: data.name,
            to: data.email,
            subject: "Purchase approved",
            body: 
            `<html>
            Your purchase of ${data.purchaseTotalAmount} was approved.
            <br/>
            Payment method: ${data.paymentMethod}
            <br/>
            Purchase date: ${data.purchaseDate}
            </html>`
        });
    }
}