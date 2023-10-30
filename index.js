const db = require('./db');

async function main() {
  await db.connect();
  let list = await db.listParts();
  console.log(list);
}

main();