const express = require('express');
const app = express();
const employeesData = require('./data');
const port = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors());
app.get('/', (req, res) => {
    res.json(employeesData)
})

app.listen(port);