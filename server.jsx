const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Booking endpoint
app.post('/api/book', (req, res) => {
  const booking = req.body;

  // Save to local file (simulates database)
  fs.readFile('bookings.json', (err, data) => {
    const bookings = data.length ? JSON.parse(data) : [];
    bookings.push(booking);
    fs.writeFile('bookings.json', JSON.stringify(bookings, null, 2), () => {
      res.status(201).send({ message: 'Booking saved!' });
    });
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
