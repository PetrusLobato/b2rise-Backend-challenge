### Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nesse projeto. Portanto utilize o comando abaixo para instalar tais dependências:

````
npm install

ou

npm i yarn
yarn install
````
<br>

### **Configure as variáveis de ambiente no seu .env**, passando as credenciais corretas para conectar em seu banco local.
````
TYPEORM_HOST= localhost
TYPEORM_USERNAME= Nome
TYPEORM_PASSWORD= senha
TYPEORM_DATABASE= nome do banco de dados
````

**Para executar as migrations**, basta utilizar o comando abaixo.

````
yarn typeorm migration:run -d src/data-source.ts
````

Com isso feito, para rodar sua aplicação, basta utilizar o comando
````
yarn dev

npm run dev

````

#### Para entender o que o projeto trabalha, basta olhar o arquivo src/img/B2RISE.drawio.png

### Quando o projeto estiver rodando na porta 3000, segue o link para documentação.
Link: http://localhost:3000/documentation/




