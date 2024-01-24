require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

const fcMenu = require('./routes/fcMenu');

app.use('/fcMenu', fcMenu);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));