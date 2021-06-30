import express, { request, response } from "express";

// @types/express
const app = express();

/**
 *GET    => Buscar dados;
 *POST   => Inserir dados;
 *PUT    => Alterar dados;
 *DELETE => Remover dados;
 *PATCH  => Alterar um dado específico;
 */

/**
 * Tipos de parâmetros
 * 
 * Routes Params => http://localhost:3000/produtos/0987462039857202
 * 
 * Query Params(Não Obrigatórios)  => http://localhost:3000/produtos?name=teclado&description=tecladobom&...
 * 
 * Body Params   => {
 * "name": "teclado",
 * "description": "teclado bom"
 * } 
 */

app.get("/test", (request, response) => {
  //Request = entrando;
  //Response = saindo;
  return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW método Post");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));