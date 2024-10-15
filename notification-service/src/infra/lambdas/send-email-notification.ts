import { EmailNotificationService } from '../services/notification/email-notification.service';
import { AxiosHttpService } from '../services/http/axios.service';
import { SQSEvent, SQSHandler } from 'aws-lambda';
import { PurchaseApprovedUseCase } from 'src/application/usecases/purchase-approved.usecase';

const purchaseApprovedUseCase = new PurchaseApprovedUseCase(
    new EmailNotificationService(new AxiosHttpService())
)

export const handler: SQSHandler = async (event: SQSEvent) => {
    for (const record of event.Records) {
        const body = JSON.parse(record.body);
        try {
            await purchaseApprovedUseCase.execute(body);
        } catch (error) {
            console.error(error);
        }
    }
}