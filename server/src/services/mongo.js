const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://nasa-api:Ex8qUaxFZ57ELsSx@nasacluster.dhuux.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(`Error: ${err}`);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

module.exports = {
  mongoConnect,
};
