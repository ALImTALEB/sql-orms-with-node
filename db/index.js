const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db',
  define: {
    timestamps: false,
  },

});

const db = {
  sequelize,
  Sequelize,
  models: {},
};

db.models.Movie = require('./models/movie.js')(sequelize);
db.models.Person = require('./models/Person')(sequelize);

module.exports = db