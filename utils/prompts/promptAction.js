const inquirer = require('inquirer');

const promptAction = () => {
    return inquirer
    .prompt([
        {
            name: 'confirm',
            type: 'confirm',
            message: 'Would you like to perform another action?',
            default: true
        }
    ])
    .then(ans => {
        // check if user would like to perform another action
        const {confirm} = ans;
        return confirm;
    })
}

module.exports = promptAction;