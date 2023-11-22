var config = require('./dbconfig');
const sql = require('mssql');

async function getBrands(){
    try {
        let pool = await sql.connect(config);
        let test = await pool.request().query("SELECT * from Brand");
        return test.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getBrands : getBrands
}