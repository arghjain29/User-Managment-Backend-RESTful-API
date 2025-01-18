const User = require('../models/userModel');

const seedAdmin = async () => {
  const adminExists = await User.findOne({ email: 'xyz@gmail.com' });
  if (!adminExists) {
    await User.create({
      name: 'Argh jain',
      email: 'xyz@gmail.com',
      password: '1234567890',
      phone: '1234567890',
      role: 'super-admin',
    });
    console.log('Super Admin created');
  } else {
    console.log('Super Admin already exists');
  }
};

module.exports = seedAdmin;
