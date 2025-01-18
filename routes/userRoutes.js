const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/userModel');

const router = express.Router();

// Get User Profile
router.get('/profile', authMiddleware, async (req, res) => {
  const { name, email, phone } = req.user;
  res.json({ name, email, phone });
});

// Update Profile
router.put('/profile', authMiddleware, async (req, res) => {
  const { name, phone } = req.body;

  try {
    req.user.name = name || req.user.name;
    req.user.phone = phone || req.user.phone;
    await req.user.save();
    res.json({ message: 'Profile updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating profile' });
  }
});

// Deactivate Account
router.delete('/deactivate', authMiddleware, async (req, res) => {
  try {
    req.user.isActive = false;
    await req.user.save();
    res.json({ message: 'Account deactivated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deactivating account' });
  }
});

// Admin: Get All Users
router.get('/admin/users', authMiddleware, async (req, res) => {
  if (req.user.role !== 'super-admin') {
    return res.status(403).json({ message: 'Access denied' });
  }

  const users = await User.find();
  res.json(users);
});

module.exports = router;
