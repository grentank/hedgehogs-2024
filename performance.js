const getSecret = () => new Promise((res) => setTimeout(res, 1000, 'secret'));

const n = 5;

const getDataParallel = () => Promise.all(new Array(n).fill(null).map(getSecret));

async function getDataSequential() {
  for (let i = 0; i < n; i += 1) {
    await getSecret();
  }
}

console.time('Promise.all'); // сравните время Promise.all
getDataParallel().then(() => console.timeEnd('Promise.all'));
console.time('for loop'); // и время работы цикла for
getDataSequential().then(() => console.timeEnd('for loop'));
