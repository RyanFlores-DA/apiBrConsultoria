const pool = require('../../db');
const queries = require('./queries');

const getLojas = (req, res) =>{
    pool.query(queries.getLojas, (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getLojasById = (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getLojasById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getLojas,
    getLojasById,
};