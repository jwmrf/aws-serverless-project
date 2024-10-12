import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { Product } from "src/domain/entities/product";
import { UpdateProductUseCase } from "src/application/usecases/product/update-product.usecase";
import { InputUpdateProductDto } from "src/application/dtos/update-product.dto";
import { ProductRepositoryFacade } from "src/infra/facade/repositories/product-repository.facade";

const productRepository =  ProductRepositoryFacade.getInstance()
const updateProductUseCase = new UpdateProductUseCase(productRepository)

export const handler: APIGatewayProxyHandler = async (event, _context): Promise<APIGatewayProxyResult> => {
    try {
        const body = typeof event.body === 'string' ? JSON.parse(event.body) :event.body

        if (!body) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Missing body' })
            }
        }
        const product = new Product(
            body.id,
            body.name,
            body.price,
            body.description,
            body.quantity,
            body.deliveryPrice,
            body.costPrice
        )
        await updateProductUseCase.execute(product as InputUpdateProductDto)

        return {
            statusCode: 201,
            body: JSON.stringify({ message: 'Product updated' })
        }
        
    } catch (error) {
        console.error(error)
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}