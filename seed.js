const { Director, Movie } = require('./db/models');

async function seed() {
  try {
    await Director.bulkCreate([
      {
        name: 'Quentin Tarantino',
        style: 'Violent, Thriller',
        country: 'USA',
        born: new Date('1963-03-27'),
      },
      {
        name: 'Christopher Nolan',
        style: 'Thriller, Mystery',
        country: 'UK',
        born: new Date('1970-07-30'),
      },
      {
        name: 'Steven Spielberg',
        style: 'Thriller, Mystery',
        country: 'UK',
        born: new Date('1946-12-18'),
      },
      {
        name: 'Martin Scorsese',
        style: 'Thriller, Mystery',
        country: 'UK',
        born: new Date('1942-11-17'),
      },
      {
        name: 'Alfred Hitchcock',
        style: 'Thriller, Mystery',
        country: 'UK',
        born: new Date('1899-08-13'),
      },
    ]);
    await Movie.bulkCreate([
      {
        title: 'Pulp Fiction',
        genre: 'Crime, Drama',
        releaseYear: 1994,
        hasOscar: true,
        directorId: 1,
      },
      {
        title: 'Reservoir Dogs',
        genre: 'Crime, Drama',
        releaseYear: 1992,
        hasOscar: false,
        directorId: 1,
      },
      {
        title: 'Inglourious Basterds',
        genre: 'Crime, Drama',
        releaseYear: 2009,
        hasOscar: false,
        directorId: 2,
      },
      {
        title: 'The Dark Knight',
        genre: 'Crime, Drama',
        releaseYear: 2008,
        hasOscar: false,
        directorId: 2,
      },
      {
        title: 'The Godfather',
        genre: 'Crime, Drama',
        releaseYear: 1972,
        hasOscar: true,
        directorId: 3,
      },
      {
        title: 'Schindler\'s List',
        genre: 'Crime, Drama',
        releaseYear: 1993,
        hasOscar: true,
        directorId: 3,
      },
      {
        title: 'Taxi Driver',
        genre: 'Crime, Drama',
        releaseYear: 1976,
        hasOscar: true,
        directorId: 4,
      },
      {
        title: 'Psycho',
        genre: 'Crime, Drama',
        releaseYear: 1960,
        hasOscar: true,
        directorId: 5,
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}

seed();
