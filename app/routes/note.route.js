var express = require('express');
var router = express.Router();


const notes = require('../controllers/note.controller.js');

router.post('/notes', notes.create);

router.get('/notes', notes.findAll);

router.get('/notes/:noteId', notes.findOne);

router.put('/notes/:noteId', notes.update);

router.delete('/notes/:noteId', notes.delete);

module.exports = router;