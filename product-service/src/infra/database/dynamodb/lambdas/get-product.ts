import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda"
import { GetProductUseCase } from "src/application/usecases/product/get-product.usecase"
import { ProductRepositoryFacade } from "src/infra/facade/repositories/product-repository.facade"

const productRepository =  ProductRepositoryFacade.getInstance()
const getProductUseCase = new GetProductUseCase(productRepository)

export const handler: APIGatewayProxyHandler = async (event, _context): Promise<APIGatewayProxyResult> => {
    try {
        const id = event.pathParameters?.id

        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Missing id' })
            }
        }

        const products = await getProductUseCase.execute(id)
        
        return {
            statusCode: 200,
            body: JSON.stringify(products)
        }
    } catch (error) {
        console.error(error)
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}