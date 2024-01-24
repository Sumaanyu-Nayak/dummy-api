const express = require('express');
const router = express.Router();

var items = require('../assets/oac.json');
// var items;
// const fcMenu= async ()=>{
//     fetch('http://127.0.0.1:5500/api/demo/routes/oac.json')
//     .then(response => response.json())
//     .then(data => {
//         items=data;
//     })
// }


console.log(items);
router.get('/itms', (req, res) => {
    res.send(items);
});
router.get('/itm/:id', (req, res) => {
    res.send(items[req.params.id]);
});
router.post('/new/id', (req, res) => {
    console.log("h");
    res.send("updated","hello", 200)
})


module.exports = router; 