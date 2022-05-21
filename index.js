const db = require('./config/connection');

// get input functions
const actionChoices = require('./utils/prompts/prompt');


// Start server after database connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected')
})

actionChoices()
.then(data => console.log(data));