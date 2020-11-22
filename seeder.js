const dotenv = require("dotenv")
const colors = require("colors")
const users = require("./data/users.js")
const products = require("./data/products.js")
const User = require("./models/userModel.js")
const Product = require("./models/productModel.js")
const Order = require("./models/orderModel.js")
const connectDB = require("./config/db.js")

dotenv.config();

connectDB();
const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // add users
    const createdUsers = await User.insertMany(users);
    // get admin user from DB
    const adminUser = createdUsers[0]._id;

    // return products with admin user
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    // add products
    await Product.insertMany(sampleProducts);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
const destoryData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
if (process.argv[2] === "-d") {
  destoryData();
} else {
  importData();
}
