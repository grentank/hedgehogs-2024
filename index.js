// Получить массив товаров
// На каждый товар создать файл с названием товара и его стоимостью
// После завершения все созданий файлов вывести в консоль "Done!"

const { EOL } = require('os');

const fs = require('fs').promises;

async function main() {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await response.json();
    await Promise.all(
      data.map((product) =>
        fs.writeFile(
          `./products/${product.id} - ${product.title}.txt`,
          `Price: ${product.price}${EOL}${product.description}`,
          'utf8',
        ),
      ),
    );
    const files = await fs.readdir('./products');
    console.log({ files: files.length, products: data.length });
    console.log('Done');
    return data;
  } catch (error) {
    console.log(error);
  }

  //   const products = data;
  //   const writeFilePromises = [];
  //   for (let index = 0; index < products.length; index++) {
  //     const product = products[index];
  //     const promise = fs.writeFile(
  //       `./products/${product.id} - ${product.title}.txt`,
  //       `Price: ${product.price}${EOL}${product.description}`,
  //       'utf8',
  //     );
  //     writeFilePromises.push(promise);
  //   }
  //   console.log('Length:', writeFilePromises.length);
  //   Promise.all(writeFilePromises);
}
// main();

function wait(ms) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

async function getProducts() {
  const response = await fetch('https://api.escuelajs.co/api/v1/products');
  return await response.json();
}

// getProducts().then((data) => {
//   console.log(data);
// });

async function foo() {
  console.log('Foooo');
}

console.log('Start');
foo();
console.log('Finish');

// async function returnAwait() {
//     return await wait(1000);
// }

// console.log(Promise.resolve('Hedgehogs'));
// console.log(
//   new Promise((res) => {
//     res('Hedgehogs');
//   }),
// );
// pending / fulfileld / rejected
