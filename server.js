const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
dotenv.config();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);
// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// prepare for deployment
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "./frontend/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// }
app.get("*", (req, res) => {
  res.send("api is running");
});
// Middleware
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(
    `server running on port ${PORT} in ${process.env.NODE_ENV} mode`.yellow.bold
  );
});
