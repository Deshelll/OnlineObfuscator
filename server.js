const express = require('express');
const app = express();
const port = 3063;

// Настройка Express для обслуживания статических файлов из папки 'static'
app.use(express.static('static'));

// Опционально: настройка маршрута для корневого URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
