const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

const eventSchema = new mongoose.Schema({
  itemName: String,
  itemDescription: String,
  itemTag: String,
  selectedDate: Date,
});
const Event = mongoose.model('Event', eventSchema);