const sequelize = require('./db');

async function migration() {
  try {
    await sequelize.query(`
        DROP TABLE IF EXISTS movies;
        DROP TABLE IF EXISTS directors;
        CREATE TABLE IF NOT EXISTS directors (
            id serial PRIMARY KEY,
            "fullName" varchar(50),
            style text,
            country varchar(30),
            born date
        );
        CREATE TABLE IF NOT EXISTS movies (
            id serial PRIMARY KEY,
            title varchar(50),
            genre varchar(50),
            "releaseYear" int2,
            "hasOscar" boolean,
            "directorId" INTEGER REFERENCES directors(id) ON DELETE CASCADE
        );
        `);
  } catch (error) {
    console.log(error);
  }
}

migration();
