const inquirer = require('inquirer');
const { query } = require('../../config/connection');
const querySQL = require('./querySQL');

const addEmployee = async () => {
    
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
            type: 'list',
            message: "Select the employee's role:",
            choices: roleArray
        },
        {
            name: 'managerId',
            type: 'list',
            message: "Select the employee's manager:",
            choices: employeeArray
        }
    ])
}

module.exports = addEmployee;