### Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nesse projeto. Portanto utilize o comando abaixo para instalar tais dependências:

````
npm install

ou

npm i yarn
yarn install
````
<br>

### **Configure as variáveis de ambiente no seu .env**, passando as credenciais corretas para conectar em seu banco local.

**Para executar as migrations**, basta utilizar o comando abaixo.

````
yarn typeorm migration:run -d src/data-source.ts
````

Com isso feito, para rodar sua aplicação, basta utilizar o comando
````
yarn dev

npm run dev

````

