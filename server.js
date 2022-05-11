const express = require('express');
const lojasRoutes = require('./src/lojas/routes');
const vendasRoutes = require('./src/vendas/routes');
const res = require('express/lib/response');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello World");
});

app.use('/lojas', lojasRoutes);
app.use('/vendas', vendasRoutes);

app.listen(port, () => console.log('app listening on port ' + port));