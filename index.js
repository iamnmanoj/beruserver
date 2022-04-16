const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const validateUser = require('./validateuser')

app.use(express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.get('/getRegisteredUser', (req, res) => {
  const userCreds = req.body;
  const { userName, password } = userCreds;
  res.json({ "isValidUser": validateUser(userName, password) });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
