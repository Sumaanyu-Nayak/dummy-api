require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors(
    {
        origin:"*",
    }
));

const fcMenu = require('./routes/fcMenu');

app.use('/fcMenu', fcMenu);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));