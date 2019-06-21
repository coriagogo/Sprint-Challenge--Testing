const request = require('supertest');
const db = require('../data/dbConfig.js');
const server = require('./server.js');

describe('server.js', () => {
  afterEach(async () => {
    await db('games').truncate();
  })

  it('should set testing env', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('GET /games', () => {
    it('should return 200 ok', async () => {
      const res = await request(server).get('/games');

      expect(res.status).toEqual(200);
    })

    it('should return an empty array', async () => {
      const res = await request(server).get('/games');
      
      expect(res.body).toEqual([]);
    })

    it('should return JSON', async () => {
      const res = await request(server).get('/games');

      expect(res.type).toBe('application/json');
    })
  })

  describe('POST /games', () => {
    it('should return 201 status', async () => {
      const game = ({ title: 'Bioshock', genre: 'Horror', releaseYear: 2007 });
      const res = await request(server).post('/games').send(game);
      expect(res.status).toEqual(201);
    })

    it('should return JSON', async () => {
      const game = ({ title: 'Bioshock', genre: 'Horror', releaseYear: 2007 });
      const res = await request(server).post('/games').send(game);
      expect(res.type).toBe('application/json');
    })
  })


})