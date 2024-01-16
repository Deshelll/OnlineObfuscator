const express = require('express');
const app = express();
const port = 3063;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
