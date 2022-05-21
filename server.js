const express = require('express');
const db = require('./config/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response 
app.use((req, res) => {
    res.status(404).end()
})

// Start server after database connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected')
    app.listen(PORT, () => {
        if (PORT === 3001) {
            console.log(`Server running, see http://localhost:${PORT}`);
        } else {
            console.log(`Server running`);
        }
    })
})