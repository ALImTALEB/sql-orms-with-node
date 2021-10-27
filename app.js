const db = require('./db');
const { Movie, Person } = db.models;
const { Op } = db.Sequelize;


(async () => {
  await db.sequelize.sync({ force: true });

  try {
    const movie = await Movie.create({
        title: 'Toy',
        runtime: 81,
        releaseDate: '1995-11-22',
        isAvailableOnVHS: true,
      });
      console.log(movie.toJSON());
  
      const movie2 = await Movie.create({
        title: 'The Incredibles',
        runtime: 115,
        releaseDate: '2004-04-14',
        isAvailableOnVHS: true,
      });
      console.log(movie2.toJSON());
  

      // Person db
      const person = await Person.create({
        firstName: 'Ali',
        lastName: 'Taleb',
      });
      console.log(person.toJSON());

      // New instance
    const movie3 = await Movie.create({
      title: 'Toy Story 3',
      runtime: 103,
      releaseDate: '2010-06-18',
      isAvailableOnVHS: false,
    });
    console.log(movie3.toJSON());

    const movie4 = await Movie.create({
      title: 'Story 3',
      runtime: 321,
      releaseDate: '2010-06-18',
      isAvailableOnVHS: false,
    });
    console.log(movie4.toJSON());

    const movie5 = await Movie.create({
      title: 'Toy Story 4',
      runtime: 103,
      releaseDate: '2010-06-18',
      isAvailableOnVHS: false,
    });
    console.log(movie5.toJSON());

    // findByPk
    const toyStory3 = await Movie.findByPk(2);

    await toyStory3.destroy();



    const movies = await Movie.findAll();
    console.log( movies.map(movie => movie.toJSON()) );




  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(err => err.message);
      console.error('Validation errors: ', errors);
    }  else {
      throw error;
    }

  }
  
})();
