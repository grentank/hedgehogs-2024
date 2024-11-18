const sequelize = require('./db');

async function seed() {
  try {
    const res = await sequelize.query(`
    INSERT INTO directors ("fullName", style, country, born) VALUES
            ('Quentin Tarantino', 'Cinematographer', 'USA', '1963-03-27'),
            ('Martin Scorsese', 'Director, Producer', 'USA', '1942-11-17'),
            ('Никита Михалков', 'Любит историю', 'Россия', '1942-11-17'),
            ('Steven Spielberg', 'Director, Producer', 'USA', '1946-12-18'),
            ('Alfred Hitchcock', 'Director, Film Editor', 'USA', '1899-08-13'),
            ('Stanley Kubrick', 'Director, Producer', 'USA', '1928-07-26'),
            ('Clint Eastwood', 'Director, Producer', 'USA', '1930-05-31'),
            ('David Fincher', 'Director, Producer', 'USA', '1962-08-28'),
            ('Ridley Scott', 'Director, Producer', 'UK', '1937-11-30'),
            ('Robert Altman', 'Director, Producer', 'USA', '1948-08-31'),
            ('Akira Kurosawa', 'Director, Producer', 'Japan', '1910-01-28');
    INSERT INTO movies (title, genre, "releaseYear", "hasOscar", "directorId") VALUES
            ('Pulp Fiction', 'Crime', 1994, true, 1),
            ('The Godfather', 'Crime', 1972, true, 2),
            ('The Dark Knight', 'Action', 2008, false, 3),
            ('Schindler''s List', 'Drama', 1993, true, 4),
            ('The Shawshank Redemption', 'Drama', 1994, true, 5),
            ('Despisable eight', 'Western', 2015, true, 1),
            ('Raging Bull', 'Biography', 1980, true, 6),
            ('The Good, the Bad and the Ugly', 'Western', 1966, true, 7),
            ('Taxi Driver', 'Crime', 1976, true, 8),
            ('Inglourious Basterds', 'War', 2009, true, 9),
            ('The Lord of the Rings: The Fellowship of the Ring', 'Fantasy', 2001, true, 10),
            ('The Lord of the Rings: The Return of the King', 'Fantasy', 2003, true, 10),
            ('The Lord of the Rings: The Two Towers', 'Fantasy', 2002, true, 10),
            ('The Matrix', 'Action', 1999, true, 11),
            ('The Matrix Reloaded', 'Action', 2003, true, 11),
            ('The Matrix Revolutions', 'Action', 2003, true, 11),
            ('The Matrix Resurrections', 'Action', 2021, true, 11);
            `);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

seed();
