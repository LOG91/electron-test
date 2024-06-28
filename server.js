const express = require('express');
const cors = require('cors');

const expressApp = express();
expressApp.use(cors());
const port = 3000;

let files = ['test files'];

expressApp.get('/api/data', (req, res) => {
  res.json({ message: files});
});

expressApp.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});