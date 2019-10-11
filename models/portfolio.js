const mongoose = require('mongoose')

const portfolioSchema = new mongoose.Schema({
  initCapital: Number,
  dailyCapital: Array,
})

module.exports = mongoose.model('Portfolio', portfolioSchema)