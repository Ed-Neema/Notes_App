import NotesAPI from './NotesAPI.js'


NotesAPI.saveNote({
    title: "New Note!",
    body: "I am a new Note"
})
console.log(NotesAPI.getAllNotes());