const express = require('express');
const Pusher = require('pusher');
const cors = require('cors');
const app = express();

// Configure Pusher
const pusher = new Pusher({
  appId: "2009806",
  key: "9e7a2f8e59d0f755ffba",
  secret: "f9f22e3e533b57a922bb",
  cluster: "ap2",
  useTLS: true
});

// Parse JSON bodies
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test endpoint to trigger event
app.post('/message', (req, res) => {
    // Log the entire request body
    console.log('Full request body:', req.body);
    
    // Log specific parts of the request
    console.log({
        messageContent: req.body?.message,
        method: req.method,
        url: req.url,
        headers: req.headers,
        timestamp: new Date().toISOString()
    });
  pusher.trigger('my-channel', 'my-event', {
    message: req.body.message || 'Hello from server!'
  });
  res.json({ status: 'sent' });
});

app.use((err, req, res, next) => {
  if (err) {
    console.error('Parsing error:', err);
    res.status(err.status || 400).json({ error: err.message });
  } else next();
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});