//Queries Lojas
const getLojas = "SELECT * FROM loja";
const getLojasById = "SELECT * FROM loja WHERE id = $1";
const validaLoja = "SELECT l FROM loja l WHERE l.loja = $1";
const addLojas = "INSERT INTO loja (loja) VALUES ($1)";
const deleteLoja = "DELETE FROM loja WHERE id = $1";
const updateLoja = "UPDATE loja set loja = $1 WHERE id = $2";

module.exports = {
    getLojas,
    getLojasById,
    validaLoja,
    addLojas,
    deleteLoja,
    updateLoja,
};