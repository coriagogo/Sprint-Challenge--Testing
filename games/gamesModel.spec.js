const request = require('supertest');

const Games = require('./gamesModel.js');
const db = require('../data/dbConfig.js');

describe('gamesModel.js', () => {
  afterEach(async () => {
    await db('games').truncate();
  })

  describe('insert', () => {
    it('should insert a game', async () => {
      const game = await Games.insert({ title: 'Bioshock', genre: 'Horror', releaseYear: 2007});
      expect(game.title).toBe('Bioshock');
      expect(game.genre).toBe('Horror');
      expect(game.id).toBe(1);
    })
  })
  

  describe('find', async () => {
    it('should return all games', async () => {
      let games = await Games.find();
      expect(games.length).toBe(0);
      await Games.insert({ title: 'Bioshock', genre: 'Horror', releaseYear: 2007});
      games = await Games.find();
      expect(games.length).toBe(1);
    })
  })
})