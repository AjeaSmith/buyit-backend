const mongoose = require("mongoose");

const connectMongoDb = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://ajeas:ajea1234@skate.nxfec.mongodb.net/SkateShop?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log(`mongodb connected ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};
module.exports = connectMongoDb;
