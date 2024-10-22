import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda"
import { ListProductUseCase } from "src/application/usecases/product/list-product.usecase"
import { ProductRepositoryFacade } from "src/infra/facade/repositories/product-repository.facade"

const productRepository =  ProductRepositoryFacade.getInstance()
const listProductUseCase = new ListProductUseCase(productRepository)
export const handler: APIGatewayProxyHandler = async (event, _context): Promise<APIGatewayProxyResult> => {
    try {
        const products = await listProductUseCase.execute()
        return {
            statusCode: 200,
            body: JSON.stringify(products),
            headers: {
                'Access-Control-Allow-Origin': '*', // Or specify your domain
                'Access-Control-Allow-Credentials': true, // If you need to send cookies or authentication
                // Other headers
              },
        }
    } catch (error) {
        console.error(error)
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}