import { InputQueueServiceDto } from 'App/Application/dtos/queue/queue-service.dto';
import { SQSEvent, SQSHandler } from 'aws-lambda';

export interface QueueServiceContract {
    send(data: InputQueueServiceDto): Promise<void>
}