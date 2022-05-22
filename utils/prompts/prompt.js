// require inquirer
const inquirer = require('inquirer');

// require action functions
const { querySQL, addDepartment, addRole } = require('../actions');

const actionChoices = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What action would you like to perform?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role', 
                'Add an employee',
                'Update an employee role'
            ]
        }
    ])
    .then(act => {
        const {action} = act;
        
        let sql;
        // let params = null;
        // call function based on selected action
        switch (action) {
            case 'View all departments': 
                sql = `SELECT * FROM department;`
                // make an SQL query
                querySQL(sql);
                break;
            
            case 'View all roles': 
                sql = `SELECT * FROM role;`
                // make an SQL query
                querySQL(sql);
                break;

            case 'View all employees':
                sql =  `SELECT * FROM employee;`
                // make an SQL query
                querySQL(sql);
                break;

            case 'Add a department':
                sql = `
                INSERT INTO department (name)
                VALUES (?);`
                // Ask user for params 
                addDepartment()
                .then(params => querySQL(sql, [params]));
                break;

            case 'Add a role':
                sql = `
                INSERT INTO role (title, salary, department_id)
                VALUES (?,?,?)`
                // As user for params
                addRole()
                .then(params => {
                    // convert Question object to array of params values
                    querySQL(sql, Object.values(params));
                })
                break;
        }

        
    })
}

module.exports = actionChoices; 