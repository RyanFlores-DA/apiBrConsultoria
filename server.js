const express = require('express');
const vendasRoutes = require('./src/vendas/routes');
const res = require('express/lib/response');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello World");
});

app.use('/api/v1/lojas', vendasRoutes);

app.listen(port, () => console.log('app listening on port ' + port));