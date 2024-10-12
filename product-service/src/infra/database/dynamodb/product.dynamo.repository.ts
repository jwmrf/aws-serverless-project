import { DynamoDBClient, QueryCommand, ScanCommand } from "@aws-sdk/client-dynamodb";
import { DeleteCommand, GetCommand, PutCommand, PutCommandInput, QueryCommandInput, ScanCommandInput, UpdateCommand, UpdateCommandInput } from "@aws-sdk/lib-dynamodb";
import { Product } from "src/domain/entities/product";
import { ProductRepositoryContract } from "src/domain/usecases/product/repositories/product/product.repository.contract";

export class ProductDynamoRepository implements ProductRepositoryContract {
    private tableName?: string;
    private client: DynamoDBClient;

    constructor() {
        this.client = new DynamoDBClient();
        this.tableName = 'products';
    }

    async create(product: Product): Promise<void> {
        const params = {
            TableName: this.tableName,
            Item: product,
        } as PutCommandInput

        const command = new PutCommand(params);
        
        await this.client.send(command);
    }

    async update(product: Product): Promise<void> {
        const params = {
            TableName: this.tableName,
            Key: {
                id: product.id
            },
            Item: product,
            UpdateExpression: 'set #name = :name, #description = :description, #salePrice = :salePrice, #costPrice = :costPrice, #quantity = :quantity, #deliveryPrice = :deliveryPrice',
            ExpressionAttributeNames: {
                '#name': 'name',
                '#description': 'description',
                '#salePrice': 'salePrice',
                '#costPrice': 'costPrice',
                '#quantity': 'quantity',
                '#deliveryPrice': 'deliveryPrice'
            },
            ExpressionAttributeValues: {
                ':name': product.name,
                ':description': product.description,
                ':salePrice': product.salePrice,
                ':costPrice': product.costPrice,
                ':quantity': product.quantity,
                ':deliveryPrice': product.deliveryPrice
            }
        } as UpdateCommandInput

        const command = new UpdateCommand(params);
        
        await this.client.send(command);
    }

    async list(): Promise<Product[]> {
        const params = {
            TableName: this.tableName,
        } as ScanCommandInput

        const command = new ScanCommand(params);

        const response = await this.client.send(command);

        return response.Items as unknown as Product[]
    }

    async get(id: string): Promise<Product> {
        const params = {
            TableName: this.tableName,
            Key: {
                id
            }
        }

        const command = new GetCommand(params);

        const response = await this.client.send(command);

        return response.Item as Product
    }

    async delete(id: string): Promise<void> {
        const params = {
            TableName: this.tableName,
            Key: {
                id
            }
        }

        const command = new DeleteCommand(params);

        await this.client.send(command);
        
    }
}