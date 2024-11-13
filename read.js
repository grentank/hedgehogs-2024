const fs = require('fs');

function myReadFile(...args) {
  return new Promise((res, rej) => {
    fs.readFile(...args, (err, fileData) => {
      if (err) rej(err);
      else res(fileData);
    });
  });
}

myReadFile('names.txt', 'utf8').then(console.log);

// fs.readFile('names.txt', 'utf8', (err, fileData) => {
//   if (err) {
//     console.log('Ошибка');
//     throw err;
//   }
//   console.log(fileData);
// });
