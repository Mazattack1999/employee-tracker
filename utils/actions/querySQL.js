const db = require('../../config/connection');

// intake sql query and paramters
const querySQL = (sql, params) => {
    db.query(sql, params, async (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        // output table of sql query result if contains 'SELECT'
        if (sql.includes('SELECT')){
            console.table(rows);
        }
    })
}

module.exports = querySQL;