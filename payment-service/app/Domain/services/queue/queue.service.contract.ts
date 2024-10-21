import { InputQueueServiceDto } from 'App/Application/dtos/queue/queue-service.dto';

export interface QueueServiceContract {
    send(data: InputQueueServiceDto): Promise<void>
}