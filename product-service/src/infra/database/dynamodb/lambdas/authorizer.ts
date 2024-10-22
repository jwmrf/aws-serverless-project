import { APIGatewayAuthorizerResult, APIGatewayTokenAuthorizerEvent } from "aws-lambda";

export const handler = async (event: APIGatewayTokenAuthorizerEvent): Promise<APIGatewayAuthorizerResult> => {
    const token = event.authorizationToken; // O token Bearer vem aqui

    if (!token) {
        throw new Error('Unauthorized'); // Sem token, sem acesso
    }
    console.log('Handler token: ', token);
    // Aqui você pode implementar a lógica para validar o token
    if (token === `Bearer ${process.env.AUTH_TOKEN}`) { // Validação de token de exemplo
        console.log('Valid token');
        return generatePolicy('user', 'Allow', event.methodArn);
    }

    // Caso o token seja inválido
    return generatePolicy('user', 'Deny', event.methodArn);
};

// Função auxiliar para criar a política de autorização
const generatePolicy = (principalId: string, effect: string, resource: string) => {
    const authResponse: any = {};
    authResponse.principalId = principalId;
    if (effect && resource) {
        const policyDocument = {
            Version: '2012-10-17',
            Statement: [{
                Action: 'execute-api:Invoke',
                Effect: effect,
                Resource: resource
            }]
        };
        authResponse.policyDocument = policyDocument;
    }
    return authResponse;
};
