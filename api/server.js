const express = require('express');

const Games = require('../games/gamesModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running!' })
});

server.get('/games', async (req, res) => {
  const games = await Games.find();
  res.status(200).json(games);  
})

server.post('/games', (req,res) => {
  Games.insert(req.body)
    .then(game => {
      res.status(201).json(game);
    })
    .catch(error => {
      res.status(500).json(error);
    })
})

module.exports = server;