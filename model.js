const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
  cash: Number,
  dailyCapital: Array,
  currentHolds: {},
})

module.exports = mongoose.model('Account', accountSchema)