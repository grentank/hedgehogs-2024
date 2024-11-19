const { Director, Movie } = require('./db/models');

async function main() {
  try {
    // const directors = await Director.findAll();
    // console.log(directors.map((d) => d.get()));
    // const moviesWithOscar = await Movie.findAll({
    //   where: {
    //     hasOscar: true,
    //   },
    //   order: [['releaseYear', 'DESC']],
    //   limit: 2,
    //   attributes: ['title'],
    // });
    // console.log(JSON.parse(JSON.stringify(moviesWithOscar)));
    // const director = await Director.findOne({
    //   where: {
    //     id: 2,
    //   },
    //   include: {
    //     model: Movie,
    //     attributes: ['title', 'releaseYear'],
    //     where: {
    //       releaseYear: 2008,
    //     },
    //   },
    // });
    // console.log(JSON.parse(JSON.stringify(director)));
    // findByPk(5)
    // const movie = await Movie.findOne({
    //   where: {
    //     id: 5,
    //   },
    //   include: {
    //     model: Director,
    //   },
    // });
    // console.log(JSON.parse(JSON.stringify(movie)));
    // console.log(movie.Director.name);
    const res = await Movie.destroy({
      where: {
        hasOscar: false,
      },
    });
    const movies = await Movie.findAll();
    console.log({ res });
    console.log(JSON.parse(JSON.stringify(movies)));
  } catch (error) {
    console.log(error);
  }
}

main();
