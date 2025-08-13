import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://cliffsdesigner:cliffsfyDatabase@cluster0.7m76nyr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("cliffsfy");

// Teste
// const songCollection = await db.collection("songs").find({}).toArray();
// console.log(songCollection);
