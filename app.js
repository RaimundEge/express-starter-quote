const express = require('express')

const app = express()
var port = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})

const customers = require('./controllers/customers');
app.get('/getCustomers', (req, res) => {
  customers.getAll((list) => {
    res.render('customers.ejs', { all: list });
  });
})

const po = require('./controllers/po');
app.get('/processPO', (req, res) => {
  po.processSample((result) => {
    res.render('po.ejs', { data: result });
  });
})

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
})

