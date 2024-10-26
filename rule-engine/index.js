const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection (Replace with your MongoDB connection string if needed)
mongoose.connect('mongodb://localhost:27017/rule_engine', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Root route for testing
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Import routes
app.use('/api/rules', require('./routes/ruleRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
