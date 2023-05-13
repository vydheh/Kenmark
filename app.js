const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const dbConnection = require('./utils/dbConnection');

const model = require('./utils/allModels')

const tableRelationship = require('./utils/allTableRelationship')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  next();
});


app.use(require('./routes/userRoute'))

app.listen(3000, () => {
    console.log('Server started on port 3000');
  });