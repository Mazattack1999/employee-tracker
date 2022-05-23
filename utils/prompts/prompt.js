// require inquirer
const inquirer = require('inquirer');
// const { query } = require('../../config/connection');

// require action functions
const { querySQL, addDepartment, addRole, addEmployee } = require('../actions');

// require promptAction function
const promptAction = require('./promptAction');

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
                return querySQL(sql);
            
            case 'View all roles': 
                sql = `SELECT * FROM role;`
                // make an SQL query
                return querySQL(sql);

            case 'View all employees':
                sql =  `SELECT * FROM employee;`
                // make an SQL query
                return querySQL(sql);

            case 'Add a department':
                sql = `
                INSERT INTO department (name)
                VALUES (?);`
                // Ask user for params 
                return addDepartment()
                .then(params => {
                    querySQL(sql, [params])
                    console.log(`Added ${params} to the database`)
                });

            case 'Add a role':
                sql = `
                INSERT INTO role (title, salary, department_id)
                VALUES (?,?,?);`;
                // As user for params
                return addRole()
                .then(params => {
                    // convert Question object to array of params values
                    querySQL(sql, Object.values(params));
                    const {title} = params;
                    console.log(`Added ${title} to the database`);
                })

            case 'Add an employee':
                sql =  `
                INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES (?,?,?,?);`;
                return addEmployee()
                .then(params => {
                    // convert Question object to array of params values
                    querySQL(sql, Object.values(params));
                    const {firstName, lastName} = params;
                    console.log(`Added ${firstName} ${lastName} to the database`);
                })
        }
    })
    .then(data => {
        return promptAction()
        .then(ans => {
            if (ans){
                actionChoices();
            }
            return;
        })
    });
}

module.exports = actionChoices; 