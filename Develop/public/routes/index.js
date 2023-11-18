// Require express
const express = require('express');
// set path to notes js
const notesRouter = require('./notes');
// open instance of express
const app = express();

// add middleware to route to the notes js file
app.use('/notes',notesRouter);


module.exports = app;