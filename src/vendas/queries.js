const getLojas = "SELECT * FROM loja";
const getLojasById = "SELECT * FROM loja WHERE id = $1";

module.exports = {
    getLojas,
    getLojasById,
};