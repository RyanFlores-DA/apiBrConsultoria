//Queries Vendas
const getVendasByDataI = "SELECT vd.id, vd.ncartao as NumeroCartao, vd.vbruto as ValorBruto, vd.vliquido as ValorLiquido, vd.dinicial as DataInicial, vd.dfinal as DataFinal, m.modal as Modalidade, vd.bandeira as Bandeira, l.loja as Loja FROM vendas as vd INNER JOIN loja as l ON l.id = vd.fkloja INNER JOIN modalidade as m ON m.id = vd.fkmodalidade ORDER BY Datainicial;"; // Ordenado pela Data Inicial
const getVendasByDataF = "SELECT vd.id, vd.ncartao as NumeroCartao, vd.vbruto as ValorBruto, vd.vliquido as ValorLiquido, vd.dinicial as DataInicial, vd.dfinal as DataFinal, m.modal as Modalidade, vd.bandeira as Bandeira, l.loja as Loja FROM vendas as vd INNER JOIN loja as l ON l.id = vd.fkloja INNER JOIN modalidade as m ON m.id = vd.fkmodalidade ORDER BY DataFinal;"; // Ordenado pela Data Inicial
const getVendasById = "SELECT * FROM vendas WHERE id = $1";
const addVenda = "INSERT INTO vendas (ncartao, vbruto, vliquido, dinicial, dfinal, fkmodalidade, bandeira, fkloja) VALUES ($1,$2,$3,$4,$5,$6,$7,$8);";
const deleteVenda = "DELETE FROM vendas WHERE id = $1";

module.exports = {
    getVendasByDataI,
    getVendasByDataF,
    getVendasById,
    addVenda,
    deleteVenda,
};