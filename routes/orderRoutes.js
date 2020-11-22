const express = require("express");
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getAllOrders,
  updateOrderToDelivered,
} = require("../controllers/orderController.js");
const { protect, admin } = require("../middleware/authMiddleware.js");

router.post("/", protect, addOrderItems);
router.get("/", protect, admin, getAllOrders);
router.get("/myorders", protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id/pay", protect, updateOrderToPaid);
router.put("/:id/deliver", protect, admin, updateOrderToDelivered);

module.exports = router;
