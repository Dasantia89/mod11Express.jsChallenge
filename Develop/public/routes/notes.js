// require needed modules
const notes = require('express').Router();
const { readFile, writeFile, access } = require('fs').promises;

// npm module used to generate a unique id
var uniqid = require('uniqid'); 

// Handle all get requests and return the list of notes
notes.get('/', (req, res) => {
    readFile('./public/assets/json/db.json', 'utf-8')
        .then(data => {
            
            res.send(JSON.parse(data));
        })
        .catch(err => console.log(err));
})

// Handle any post requests for /notes. Receive new note, add it to existing list and return it with a unique id
notes.post('/', (req, res) => {

    readFile('./public/assets/json/db.json', 'utf-8')
        .then(data => {
            var noteList = JSON.parse(data);
            var newNote = req.body;
            newNote.id = uniqid();
            noteList.push(newNote);
            res.send(writeFile('./public/assets/json/db.json', JSON.stringify(noteList)));
        })
        .catch(err => console.log(err));
});

// Handle delete request for /notes. Get notes list, remove entry matching selected id, then save the new list
notes.delete('/:id', (req, res) => {
    console.log(req.params);
    readFile('./public/assets/json/notes.json', 'utf-8')
    .then(data => {
        var id =req.params.id;
        var noteList = JSON.parse(data);
        noteList.forEach((note,index)=> {
            if(note.id == id){
                noteList.splice(index,1)
            }
        })
        res.send(writeFile('./public/assets/json/notes.json', JSON.stringify(noteList)));
    })
    .catch(err => console.log(err));
});


module.exports = notes;
