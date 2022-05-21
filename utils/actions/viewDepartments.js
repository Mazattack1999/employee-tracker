const db = require('../../config/connection');


const viewDepartments = () => {
    console.log('success');
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
    })
}

module.exports = viewDepartments;