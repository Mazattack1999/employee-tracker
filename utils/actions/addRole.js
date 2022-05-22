const inquirer = require('inquirer');

const addRole = () => {
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
            type: 'number',
            message: 'Enter the department ID of the role:'
        }
    ])
}

module.exports = addRole;