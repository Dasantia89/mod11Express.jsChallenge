// Require npm modules
const express = require('express');
const path = require('path');

// Declare an instance of express in the app variable
const app = express();

// Assign the port to be used
const PORT = process.env.PORT || 3001
// Path to routes folder
const api = require('./routes');

// Add Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

// Get index files
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// listen for requests on PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

