const inquirer = require('inquirer');
const querySQL = require('./querySQL');

const addRole = async () => {
    // query for departments
    const sql = `SELECT * FROM department;`;
    const departments = await querySQL(sql);
    const departmentArray = departments.map(value => {
        const {name} = value;
        return name;
    })

    return inquirer
    .prompt([
        {
            name: 'title',
            type: 'input',
            message: 'Enter the role name:'
        },
        {
            name: 'salary',
            type: 'number',
            message: 'Enter the role salary:'
        },
        {
            name: 'departmentId',
            type: 'list',
            message: 'Select a department:',
            choices: departmentArray
        }
    ])
    .then(data => {
        // get index of selected value
        data.departmentId = departmentArray.indexOf(data.departmentId) + 1;
        return data;
    })
}

module.exports = addRole;