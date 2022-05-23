const db = require('../../config/connection');

// intake sql query and paramters
const querySQL = async (sql, params) => {
    // create promise to await db change/get
    let res = null;
    const query = new Promise((resolve, reject) => {
        db.query(sql, params, (err, rows) => {
            if (err) {
                console.log(err);
                return reject();
            }
            // output table of sql query result if contains 'SELECT'
            if (sql.includes('SELECT')){
                console.table(rows);
            }
            res = rows;
            resolve();
        })
    })

    await query;
    return res;
}

module.exports = querySQL;