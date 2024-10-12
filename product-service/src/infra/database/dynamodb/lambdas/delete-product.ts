import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { DeleteProductUseCase } from "src/application/usecases/product/delete-product.usecase";
import { ProductRepositoryFacade } from "src/infra/facade/repositories/product-repository.facade";

const productRepository = ProductRepositoryFacade.getInstance()
const deleteProductUseCase = new DeleteProductUseCase(productRepository)

export const handler: APIGatewayProxyHandler = async (event, _context): Promise<APIGatewayProxyResult> => {
    try {
        const id = event.pathParameters?.id

        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Missing id' })
            }
        }

        await deleteProductUseCase.execute(id)

        return {
            statusCode: 201,
            body: JSON.stringify({ message: 'Product Deleted' })
        }
    } catch (error) {
        console.error(error)
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}