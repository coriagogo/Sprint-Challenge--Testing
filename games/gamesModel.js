const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  find,
  findById,
};

function insert(game) {
  return db('games')
    .insert(game, 'id')
    .then(ids => {
      return db('games')
        .where({ id: ids[0] })
        .first();
    });
}

async function update(id, changes) {
  return undefined;
}

function remove(id) {
  return db('games')
    .where({ id })
    .delete();
}

function find() {
  return db('games');
}

function findById(id) {
  return null;
}