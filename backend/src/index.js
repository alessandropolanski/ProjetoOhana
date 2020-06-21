const express = require('express'); 
const mongoose = require('mongoose');
const routes = require('./routes')

mongoose.connect('mongodb+srv://ohana:Positivo12345@cluster0-masxc.mongodb.net/db_ohana?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
 
app.use(express.json());
app.use(routes);
app.listen(3333);

// .use (considera todos os metodos HTTP (get,post,put,delete))

// Métodos HTTP: get, post, put, delete

// get => listar usuarios, buscar apenas um usuario
// post => criar algo, salvar produto, cadastrar usuario
// put => editar algo, editar usuario, produto
// delete => deletar algo

// Tipos de parametros
// Query Params: request.query(Filtros, Ordenação, Paginação, ...)
// Route Params: resquest.params (identificar recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de algum registro)





