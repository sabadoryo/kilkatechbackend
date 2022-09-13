const express = require('express');

const songsRouter = require('./songs/songs.router');

const api = express.Router();

api.use('/songs', songsRouter);

module.exports = api;