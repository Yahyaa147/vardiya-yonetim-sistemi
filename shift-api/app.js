const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:3001'
}));
app.use(express.json());

// Basit in-memory database
const shifts = [
  {
    id: 1,
    title: '08:00-16:00',
    assigned_to: 'Ali Yılmaz',
    start_time: new Date().toISOString(),
    end_time: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 2,
    title: '16:00-24:00',
    assigned_to: 'Ayşe Demir',
    start_time: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(),
    end_time: new Date(Date.now() + 16 * 60 * 60 * 1000).toISOString()
  }
];

app.get('/api/v1/shifts', (req, res) => {
  res.json(shifts);
});

module.exports = app;
