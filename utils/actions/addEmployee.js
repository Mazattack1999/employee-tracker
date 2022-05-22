const inquirer = require('inquirer');

const addEmployee = () => {
    return inquirer
    .prompt([
        {
            name: 'firstName',
            type: 'input',
            message: "Enter the employee's first name:"
        },
        {
            name: 'lastName',
            type: 'input',
            message: "Enter the employee's last name:"
        },
        {
            name: 'roleId',
            type: 'number',
            message: "Enter the employee's role ID:"
        },
        {
            name: 'managerId',
            type: 'number',
            message: "Enter the ID of the employee's manager:"
        }
    ])
}

module.exports = addEmployee;