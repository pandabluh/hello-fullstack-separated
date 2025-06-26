const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors()); // Permette richieste cross-origin

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});