// const myPromise = new Promise((resolve, reject) => {
//   resolve('Hedgehogs'); // fulfilled
// });

const { EOL } = require('os');

// myPromise.then((data) => {
//   console.log(data.toUpperCase());
// });

// const res = fetch('https://rickandmortyapi.com/api/character/1');

// try {
// res
//   .then((response) => response.js()) // Парсит данные
//   .catch(() => console.log('Ошибка получения и парсинга данных'))
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.log('Возникла ошибка');
//   });
// } catch (error) {
//   console.log('Возникла ошибка');
// }

// Вначале будет файл с id: 1, 5, 13, 20
// По этим id нужно найти персонажей
// Все имена записать в какой-то файл

const fs = require('fs').promises;

function getCharacter(id) {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then((res) =>
    res.json(),
  );
}

function main() {
  fs.readFile('charIds.txt', 'utf8')
    .then((fileData) => {
      const ids = fileData.split(', ');
      const promises = [];
      for (let index = 0; index < ids.length; index++) {
        const id = ids[index];
        const promise = getCharacter(id);
        promises.push(promise);
      }
      return Promise.all(promises); // дожидается успешного конца ВСЕХ
    })
    .then((characters) => {
      const names = characters.map((c) => c.name);
      return fs.writeFile('names.txt', names.join(EOL), 'utf8');
    })
    .then(() => fs.rm('charIds.txt', { recursive: true, force: true }))
    .finally(() => console.log('Завершено успешно!'));

  console.log('After');
}

// main();

const bcrypt = require('bcrypt');

function syncHashes(n) {
  // синхронно шифрует n паролей алгоритмом bcrypt
  return new Array(n).fill(null).map(() => bcrypt.hashSync('password', 12));
}

function asyncHashes(n) {
  // асинхронно шифрует n паролей алгоритмом bcrypt
  const promises = new Array(n).fill(null).map(() => bcrypt.hash('password', 12));
  return Promise.all(promises);
}

console.time('sync');
syncHashes(10);
console.timeEnd('sync'); // выведет время шифрования 10 синхронных паролей
console.time('async');
asyncHashes(10).then(() => console.timeEnd('async')); // сравните время
