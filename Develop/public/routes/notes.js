const notes = require('express').Router();
const { readFile, writeFile, access } = require('fs').promises;

// Handle all get requests and return the list of notes
notes.get('/', (req, res) => {
    readFile('./public/assets/json/notes.json', 'utf-8')
        .then(data => {
            
            res.send(JSON.parse(data));
        })
        .catch(err => console.log(err));
})

