const express = require('express');
const app = express();

app.use(express.json()); // Untuk menangani JSON pada body request

app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;
  if (username && email && password) {
    res.status(201).json({ message: 'User registered successfully!' });
  } else {
    res.status(400).json({ error: 'Invalid data!' });
  }
});

app.listen(8081, () => {
  console.log('Server berjalan di http://localhost:8081');
});
