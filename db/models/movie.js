const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Movie extends Sequelize.Model {}
    Movie.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false, // disallow null
        validate: {
          notNull: {
            msg: 'Please provide a value for "title"',
          },
          notEmpty: {
            msg: 'Please provide a value for "title"',
          },
    
         },
      },
      releaseDate: {
        type: Sequelize.DATEONLY,
        allowNull: false, // disallow null
        validate: { 
          notNull: {
            msg: 'Please provide a value for "releaseDate"',
          },
          isAfter: {
            args: '1895-12-27',
            msg: 'Please provide a value on or after "1895-12-28" for "releaseDate"',  
          },
        },
      },
      isAvailableOnVHS: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false, // set default value
      },  
    }, {
      paranoid: true,
      modelName: 'movie',
      sequelize });
  
    return Movie;
  };
  