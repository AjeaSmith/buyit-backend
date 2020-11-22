const express = require("express");
const router = express.Router();
const { admin, protect } = require("../middleware/authMiddleware.js");
const {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createReview,
} = require("../controllers/productController.js");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/:id/reviews", protect, createReview);
// ADMIN ROUTES
router.post("/", protect, admin, createProduct);
router.delete("/:id", protect, admin, deleteProduct);
router.put("/:id", protect, admin, updateProduct);

module.exports = router;
