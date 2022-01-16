const mongoose = require('mongoose')

const firstSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    minlength: 6,
  },
  address: {
    type: String,
  },
})

const firstColl = new mongoose.model('firstColl', firstSchema)

module.exports = firstColl
