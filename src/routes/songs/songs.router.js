const express = require('express');

const {
  httpGetSongs,
  httpGetFilterData,
} = require('./songs.controller');

const songsRouter = express.Router();


songsRouter.get('/', httpGetSongs);
songsRouter.get('/get-filter-data', httpGetFilterData)

console.log(songsRouter.stack)

module.exports = songsRouter;