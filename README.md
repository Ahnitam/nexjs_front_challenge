# Frontend Next.js para Projeto de Gerenciamento de Clientes com Cartão

Este é o frontend em Next.js para o projeto de Gerenciamento de Clientes com Cartão. Ele se comunica com a [API Laravel](https://github.com/Ahnitam/laravel_back_challenge) para exibir dados e interagir com o backend.

## Descrição

O frontend Next.js é responsável por renderizar as páginas da aplicação, lidar com a interface do usuário e fazer chamadas à API para obter e enviar dados.

## Instalação

1. Clone este repositório para a sua máquina local.
2. Execute `npm install` para instalar as dependências do Next.js.
3. Crie um arquivo `.env` com as configurações do ambiente.
4. Execute `npm run dev` para iniciar o servidor de desenvolvimento ou `npm run build` e `npma run start` para iniciar em produção.

## Variaveis de Ambiente

`API_URL`= Url da API do projeto [API Laravel](https://github.com/Ahnitam/laravel_back_challenge)
(ex: http://localhost:8000/api) [Obrigatória]

## Rotas

Aqui estão algumas das principais rotas do frontend:

1. **/**: Página inicial da aplicação.
2. **/customers**: Lista de clientes obtida da API.
3. **/customers/{customer_id}/cards**: Lista de cartões do cliente obtida da API.

## Componentes

O frontend utiliza componentes reutilizáveis para construir as páginas. Alguns exemplos de componentes incluem:

- `Header`: Cabeçalho da aplicação.
- `CustomersList`: Lista de clientes.
- `CardList`: Lista de cartões.
- `Pagination`: Paginação
- `CustomersForm`: Formulario de cliente.
- `CardForm`: Formulario do cartão.

## Licença

Este projeto está licenciado sob a MIT License.
