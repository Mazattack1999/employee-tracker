const inquirer = require('inquirer');
const querySQL = require('./querySQL');

const updateEmployee = async() => {
    // query all current roles and employees to use as answer choices
    const roles = await querySQL(`SELECT * FROM role;`);
    const roleArray = roles.map(value => {
        return {
            name: value.title,
            value: value.id
        }
    })

    const employees = await querySQL(`SELECT * FROM employee;`, null, true);
    const employeeArray = employees.map(value => {
        return {
            name: `${value.first_name} ${value.last_name}`,
            value: value.id
        }
    })

    return inquirer
    .prompt([
        {
            name: 'employee',
            type: 'list',
            message: 'Select an employee to edit:',
            choices: employeeArray
        },
        {
            name: 'role',
            type: 'list',
            message: 'Select a new role for the employee:',
            choices: roleArray
        }
    ])
}

module.exports = updateEmployee;