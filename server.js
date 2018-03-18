const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// db file
const db = require('./server/api/db');

app.get('/accounts', function (req, res) {
  res.send(db)
});

app.listen(3000);
