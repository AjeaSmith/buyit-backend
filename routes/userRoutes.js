const express = require("express");
const router = express.Router();
const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  adminUpdateUser,
} = require("../controllers/userController.js");
const { admin, protect } = require("../middleware/authMiddleware.js");

router.post("/", registerUser);
router.get("/", protect, admin, getUsers);
router.delete("/:id", protect, admin, deleteUser);
router.get("/:id", protect, admin, getUserById);
router.put("/:id", protect, admin, adminUpdateUser);
router.post("/login", authUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
module.exports = router;
