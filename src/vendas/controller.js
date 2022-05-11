const { response } = require('express');
const pool = require('../../db');
const queries = require('./queries');

//Listar todas as vendas pela DataI
const getVendasByDataI = (req, res) => {
    pool.query(queries.getVendasByDataI, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
//Listar todas as vendas pela DataF
const getVendasByDataF = (req, res) => {
    pool.query(queries.getVendasByDataF, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
//Localizar vendas pelo id
const getVendasById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getLojasById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}
//Add venda
const addVenda = (req, res) => {
    const {ncartao, vbruto, vliquido, dinicial, dfinal, fkmodalidade, bandeira, fkloja} = req.body;
    pool.query(queries.addVenda, [ncartao, vbruto, vliquido, dinicial, dfinal, fkmodalidade, bandeira, fkloja], (error, results) => {
        if (error) throw error;
        res.status(201).send("Venda adicionada com sucesso!");
    });

}
//Delete venda
const deleteVenda = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteVenda, [id], (error, results) => {
        const noCadLoja = !results.rows.length;
        if (noCadLoja) {
            res.send("Essa Venda não existe!");
        }

        pool.query(queries.deleteLoja, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Venda deletada com sucesso!");
        })
    });
}

module.exports = {
    getVendasByDataI,
    getVendasByDataF,
    getVendasById,
    addVenda,
    deleteVenda,
};