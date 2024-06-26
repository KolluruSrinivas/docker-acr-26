const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Friends welcome to Docker Tutorial by NCPL');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
