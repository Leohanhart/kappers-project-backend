const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3000;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "barber"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT persoon_id FROM persoon", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

app.get('/', (req, res) => {
  res.send('Hello World! From node.js');
})

app.get('/api/appointment/get/:id', (req, res) => {

})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})