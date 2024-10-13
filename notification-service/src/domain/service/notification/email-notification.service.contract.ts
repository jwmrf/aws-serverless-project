import { InputEmailNotificationDto } from "src/application/dtos/email-notification.dto";

export interface EmailNotificationServiceContract {
    send(data: InputEmailNotificationDto): Promise<void>;
}