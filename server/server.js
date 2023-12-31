const express = require("express");
const { MongoClient } = require("mongodb");
const routes = require("./routes");

const collectionName = "laafcluster";
const dbName = "workout-app";

const app = express();

// Set up the database connection
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

app.use(express.json());

client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB Atlas");

    // Get the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const cors = require("cors");

    app.use(cors());


    // Pass the collection as an argument
    const routesWithCollection = routes(collection);

    // Use the routes middleware
    app.use("/", routesWithCollection);

    // Start your server or perform other operations after successful database connection
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB Atlas:", error);
  });
