const express = require('express');
const app = express();
const cors = require('cors');

const allData = require("./dataset.json");

app.use(cors())

app.get('/', (req, res) => { res.json({ name: "rakib" }) })
app.get('/alldata', (req, res) => { res.json(allData) })

app.listen(5000, () => { console.log("server..."); })