const express = require ('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();


/* Métodos HTTP - CRUD
 * Post - Create
 * Get - Read
 * Put - Update
 * Delete - Delete
 */

/* Tipos de paraâmetros:
 * Query parameters: parametros nomeados, enviados na rota, após o símbolo de ? e geralmente servem para filtros, paginação
 */
app.use(cors({
    origin: 'http:'
}));
app.use(express.json());
app.use(routes);
app.listen(3333);

