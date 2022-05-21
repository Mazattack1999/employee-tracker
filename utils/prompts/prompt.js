// require inquirer
const inquirer = require('inquirer');

// require action functions
const { viewDepartments } = require('../actions');

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
                'Add a departement',
                'Add a role', 
                'Add an employee',
                'Update an employee role'
            ]
        }
    ])
    .then(act => {
        const {action} = act;
        // call function based on selected action
        console.log(action);
        switch (action) {
            case 'View all departments': 
                return viewDepartments();
        }
    })
}

module.exports = actionChoices; 