const sequelize = require('./db');

async function main() {
  try {
    // await sequelize.query(
    //   "CREATE ROLE grentank WITH PASSWORD '123' LOGIN SUPERUSER;",
    // );
    // await sequelize.query(
    //   "CREATE DATABASE grentank OWNER grentank;",
    // );
    // const res = await sequelize.query('CREATE DATABASE "movie-directors" OWNER admin;');
    // const [res, metadata] = await sequelize.query(`
    //     SELECT * FROM movies;
    //         `);
    // const [res, metadata] = await sequelize.query(`
    //     SELECT 
    //     directors."id" as "id", directors."fullName" as name, 
    //     movies.title as title, movies.id as "movieId" 
    //     FROM directors JOIN movies ON movies."directorId" = directors."id" 
    //     WHERE directors."id" = 3;
    //         `);
    const [res, metadata] = await sequelize.query(`
        SELECT *
        FROM directors LEFT JOIN movies ON movies."directorId" = directors."id" 
        WHERE directors."id" = 11;
            `);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
  //   try {
  //     await sequelize.authenticate();
  //     console.log('Connection has been established successfully.');
  //   } catch (error) {
  //     console.error('Unable to connect to the database:', error);
  //   }
}

main();
