const { Hedgehog } = require('./db/models');

// IIFE
(async function main() {
  try {
    const students = await Hedgehog.findAll();
    console.log(students.map((s) => s.get()));
  } catch (error) {
    console.log(error);
  }
})();
