function log1() {
  console.log('1');
}
function log2() {
  console.log('2');
}
function log3() {
  console.log('3');
}
function log4() {
  console.log('4');
}
function log5() {
  console.log('5');
}
function log6() {
  console.log('6');
}

// Click the "RUN" button to learn how this works!
// log1();
// setTimeout(log2, 0);
// Promise.resolve().then(log3);
// log4();

// log1();
// setTimeout(log2, 0);
// log3();
// Promise.resolve().then(log4).then(log5);
// log6();
// Executor выполняется синхронно
// const promise = new Promise((res) => {
//     log1()
//     res(2);
//     log3();
//     setTimeout(log4, 0);
//   });
//   log5();
//   promise.then(function logData(data) {console.log(data)});

async function start() {
  await log1();
  log2();
}

async function finish() {
  log3();
}

start().then(log4);
log5();
finish().then(log6);
