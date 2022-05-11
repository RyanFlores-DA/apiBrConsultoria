const { response } = require('express');
const pool = require('../../db');
const queries = require('./queries');

//Listar todas as Lojas
const getLojas = (req, res) =>{
    pool.query(queries.getLojas, (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

//Localizar loja pelo endereço
const getLojasById = (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getLojasById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

//Add Loja
const addLojas = (req, res) =>{
    const {loja} = req.body;
    //Validacao
    pool.query(queries.validaLoja, [loja], (error, results) =>{
        if(results.rows.length){
            res.send("Loja já está cadastrada!");
        }
        
        pool.query(queries.addLojas, [loja], (error, results) =>{
            if(error) throw error;
            res.status(201).send("Loja adicionada com sucesso!");
        });
    });
}

//Delete Loja
const deleteLoja = (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.deleteLoja, [id], (error, results) =>{
        const noCadLoja = !results.rows.length;
        if(noCadLoja){
            res.send("Loja não existe na base de dados!");
        }

        pool.query(queries.deleteLoja, [id], (error, results) =>{
            if(error) throw error;
            res.status(200).send("Loja deletada com sucesso!");
        })
    });
}

//Atualizar Lojas
const updateLoja = (req,res) =>{
    const id = parseInt(req.params.id);
    const { loja } = req.body;

    pool.query(queries.getLojasById, [id], (error, results) => {
        res.send("Loja não existe na base de dados!");
    });

    pool.query(queries.updateLoja, [loja, id], (error, results) => {
        if(error) throw error;
        res.status(200).sed("Loja Atualizada com sucesso!");
    });
}

module.exports = {
    getLojas,
    getLojasById,
    addLojas,
    deleteLoja,
    updateLoja,
};