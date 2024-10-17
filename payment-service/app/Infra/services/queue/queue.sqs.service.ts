import { InputQueueServiceDto } from "App/Application/dtos/queue/queue-service.dto";
import { QueueServiceContract } from "App/Domain/services/queue/queue.service.contract";
import AWS from 'aws-sdk';

export class QueueService implements QueueServiceContract {
    async send(params: InputQueueServiceDto): Promise<void> {
        AWS.config.update({
            region: process.env.AWS_REGION,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        })
        
        const sqs = new AWS.SQS();

        const paramsSQS = {
            MessageBody: JSON.stringify(params),
            QueueUrl: process.env.AWS_SQS_URL ?? ''
        }
        try {
            await sqs.sendMessage(paramsSQS).promise();
        } catch (error) {
            console.error(error)
            throw new Error('Error')
        }
    }
}