async function myF() {
  await 1;
  await 2;
  console.log(3);
}

console.log(4);
await myF();
console.log(5);
