# AWS Serverless Project

Este projeto é uma aplicação **serverless** desenvolvida para demonstrar a integração de diversos serviços da AWS com foco em escalabilidade, automação e eficiência. A aplicação utiliza **TypeScript** junto ao **Serverless Framework** e é composta por três serviços principais que se comunicam entre si utilizando **Amazon SQS**. A solução também inclui integrações com **Stripe** para processamento de pagamentos e **Brevo** para envio de e-mails de notificação após a compra.

## Visão Geral

Este projeto é dividido em três micro-serviços independentes, todos utilizando a AWS para fornecer uma solução totalmente serverless. As principais funcionalidades incluem:

- **Cadastro de usuários, produtos e carrinhos** utilizando **DynamoDB**.
- **Filas SQS** para orquestrar a comunicação entre os serviços.
- Integração com o **Stripe** para processamento de pagamentos.
- Envio de notificações por e-mail com **Brevo** (antigo Sendinblue) após a conclusão de uma compra.
- Arquitetura **serverless** simplificada utilizando o arquivo `serverless.yml` para provisionamento de infraestrutura como código.

## Estrutura dos Serviços

1. **Product Service**
   - Gerencia o cadastro e a listagem de produtos no **DynamoDB**.
   - Exposição de endpoints para criar, atualizar e visualizar produtos.

2. **Payment Service**
   - Integração com o **Stripe** para processar pagamentos.
   - Recebe eventos do SQS e processa as compras de produtos de forma assíncrona.

3. **Notification Service**
   - Utiliza o **Brevo** para enviar e-mails de notificação para os usuários após a confirmação de pagamento.
   - Focado em garantir a comunicação eficiente com o cliente sobre suas compras.

## Tecnologias Utilizadas

- **TypeScript**: Usado em toda a base do código para garantir uma tipagem estática e maior segurança no desenvolvimento.
- **Serverless Framework**: Ferramenta para gerenciar a infraestrutura como código e facilitar o deploy de serviços serverless na AWS.
- **AWS SQS**: Gerenciamento de filas de mensagens para comunicação entre os serviços.
- **AWS DynamoDB**: Banco de dados NoSQL altamente escalável para armazenar os dados de usuários, produtos e carrinhos.
- **Stripe API**: Integração para realizar transações de pagamento com segurança e simplicidade.
- **Brevo API**: Utilizada para o envio de e-mails transacionais aos clientes.
- **AWS Lambda**: Execução dos serviços de forma serverless, sem necessidade de gerenciar servidores.
