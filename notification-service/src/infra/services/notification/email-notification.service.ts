import { InputEmailNotificationDto } from "src/application/dtos/email-notification.dto";
import { HttpServiceContract } from "src/domain/service/http/http.service.contract";
import { EmailNotificationServiceContract } from "src/domain/service/notification/email-notification.service.contract";

export class EmailNotificationService implements EmailNotificationServiceContract {
    private brevoBaseApi = process.env.BREVO_API_URL
    private brevoApiKey = process.env.BREVO_API_KEY
    constructor(
        private readonly httpService: HttpServiceContract
    ) {}
    async send(body: InputEmailNotificationDto): Promise<void> {
        try {
            const requestParams = {
                sender: {
                    name: "Wilson",
                    email: "dobomteste@gmail.com"
                },
                to: [
                    {
                        name: body.name,
                        email: body.to
                    }
                ],
                subject: body.subject,
                textContent: body.body,
                htmlContent: body.body
            }
            await this.httpService.post(`${this.brevoBaseApi}smtp/email`, requestParams, {
                "api-key": this.brevoApiKey
            })
        } catch (error) {
            throw error
        }
        
    }
}