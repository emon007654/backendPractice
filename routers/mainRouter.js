const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = express.Router()
require('../db/conn')
const collection = require('../models/DataStr')
const path = require('path')
const bodyParser = require('body-parser')
// setting view engine

router.get('/home', (req, res) => {
  res.render('home')
})
router.get('/login', (req, res) => {
  res.render('login')
})
router.post('/login', async (req, res) => {
  try {
    const db = collection({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    })
    const result = await db.save()
    res.send(result)
  } catch (error) {
    res.send(error)
  }
})

module.exports = router
