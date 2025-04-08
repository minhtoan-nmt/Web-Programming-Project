import clientPromise from ".";

let client;
let db;
let movies;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    movies = await db.collection("movies");
  } catch (e) {
    throw new Error("Failed to establish connection to database");
  }
}

;(async () => {
  await init();
})()