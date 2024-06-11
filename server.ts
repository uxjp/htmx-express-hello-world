const express = require('express');
const cors = require('cors')

const PORT = 3000;
const app = express();
app.use(cors())

app.get('/hello', (_, res) => {
  res.send("<p>Hello World!</p>")
});

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
