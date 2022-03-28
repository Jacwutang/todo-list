const express = require('express');
const cors = require('cors');
const users = require('./users');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use('/users', users);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});