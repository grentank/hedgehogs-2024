const { User, Message, Favorite } = require('./db/models');

const pretty = (obj) => JSON.parse(JSON.stringify(obj));

async function main() {
  try {
    // const alex = await User.findOne({
    //   where: {
    //     name: 'Alex',
    //   },
    //   include: {
    //     model: Favorite,
    //     include: {
    //       model: Message,
    //     },
    //   },
    // });
    // const favoritedByAlex = alex.Favorites.map((f) => f.Message);
    const alex = await User.findOne({
      where: {
        name: 'Alex',
      },
      include: 'favorites',
    });
    console.dir(pretty(alex), { depth: null });
  } catch (error) {
    console.log(error);
  }
}

main();
