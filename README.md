# Preço Certo - Desafio Vuejs

## O Desafio
#### Descrição:

- Desenvolver o frontend do MVP de formação de preços de acordo com o protótipo abaixo:
[Prototipo](https://xd.adobe.com/view/293ffc9d-bfbf-4d25-883c-fa27fa69d762-7c6c/screen/f39ba645-b03d-400f-aad9-68a3499eaa4a/)
- Precisamos dar a visão de preço e margem de cada produto para o cliente que quer vender um produto na B2W.

#### Requisitos do MVP:
Precisamos de toda a estrutura do design feita no frontend mas somente alguns elementos deverão ser dinâmicos,
sendo eles listagem dos produtos, edição de custo inline com atualização do preço.
- Frontend em Vue.js do MVP seguindo à risca o design proposto pelo protótipo.
- Separar adequadamente os componentes.
- Listar produtos a partir de uma api da nossa aplicação backend.
- O endpoint será "https://sys.precocerto.co/api/products".
- O arquivo products.json é um mock do retorno do endpoint, utilize esse mock como base para implementação.
- Permitir editar o custo do produto inline (ao clicar no valor do custo da tabela).
- Para editar o custo precisa ser enviado um json com o valor do custo numa requisição PATCH para o endpoint
"https://sys.precocerto.co/api/products/:id".
- O exemplo de json que precisa ser enviado e o retorno dele você encontra no arquivo edit_product_request.json e
id_product response.json, respectivamente.
- A resposta da atualização contém o preço novo do produto, que deve ser atualizado na tabela.
- A requisição PATCH deve ocorrer quando o cliente parar de digitar por 1s o valor do custo.
- Considere que os padrões REST estão sendo rigorosamente aplicados na API para retorno de status HTTP correto.
- É permitida a utilização de qualquer UI framework.



## Minha resolução
#### O que foi usado:
- Para alguns componentes visuais usei [Buefy](https://buefy.org/)
- Para realizar as requisições HTTP usei [Axios](https://axios-http.com/ptbr/docs/intro)
- Para simular o endpoints usei [Miragejs](https://miragejs.com/)

#### Requisições 
As requisições foram feitas seguindo os monks dados
##### Rotas:
- Get("https://sys.precocerto.co/api/products") retorna o seguinte: 
```javascript
{
  "total": 3,
  "next": null,
  "previous": null,
  "rows": [
    {
      "id": 5069894,
      "code": "7891356073403",  // Código do produto
      "name": "Aspirador de Pó Vertical 2x1 Britânia Dust Off BAS1000V 220v", // Nome do produto
      "cost": 12.5, // Custo do produto
      "price": 75.5, // Preço do produto
      "south_shipping": 45.9, // Frete Sul e Sudeste
      "north_shipping": 59.9 // Frete Resto do Brasil
    },
    {
      "id": 5069892,
      "code": "7891356093333",  // Código do produto
      "name": "Fritadeira Air Fry Philco PFR18TI Titanium 4,6L 1500W 220v",  // Nome do produto
      "cost": 26.6, // Custo do produto
      "price": 150.6, // Preço do produto
      "south_shipping": 21.9, // Frete Sul e Sudeste
      "north_shipping": 35.9 // Frete Resto do Brasil
    },
    {
      "id": 5069888,
      "code": "8710103950585",  // Código do produto
      "name": "Liquidificador Philips Walita RI2240/40 Vermelho 1200W 220V",  // Nome do produto
      "cost": 15.5, // Custo do produto
      "price": 78.5, // Preço do produto
      "south_shipping": 15.9, // Frete Sul e Sudeste
      "north_shipping": 25.9 // Frete Resto do Brasil
    }
  ]
}
```
- A requisição PACTH envia o novo custo e recebe um novo objeto já atualizado
###### Exemplo de envio:
```javascript
{
  "cost": 50.55
}
```
###### Exemplo de retorno: 
```javascript
{
  "id": 5069888,
  "code": "8710103950585",  // Código do produto
  "name": "Liquidificador Philips Walita RI2240/40 Vermelho 1200W 220V",  // Nome do produto
  "cost": 50.55, // Custo do produto
  "price": 150.40, // Preço do produto
  "south_shipping": 15.9, // Frete Sul e Sudeste
  "north_shipping": 25.9 // Frete Resto do Brasil
}
```
#### Screenshort do meu resultado
![Screenshot do meu resultado](https://user-images.githubusercontent.com/57544105/132931166-8a5262e4-15ea-45b9-b833-bd2493af63ac.png)

#### Como executar: 
Para executar é bastante simples, você apenas precisa clona esse repositorio
```sh
$ git clone https://github.com/andreLuis1506/Desafio-Preco-Certo.git 
```
Baixar as dependencias do projeto
```sh
$ npm install
```

E por ultimo, iniciar o servidor de desenvolvimento
```sh
$ npm run serve
```

