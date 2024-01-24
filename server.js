const express = require('express');
const app = express();
const port = 3000;

const fcMenu = require('./routes/fcMenu');

app.use('/fcMenu', fcMenu);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));