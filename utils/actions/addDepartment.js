const inquirer = require('inquirer');

const addDepartment = () => {
    return inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter a department name:'
        }
    ])
    .then(data => {
        const {name} = data;
        return name;
    })
}

module.exports = addDepartment;