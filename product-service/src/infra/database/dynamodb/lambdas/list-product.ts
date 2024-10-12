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