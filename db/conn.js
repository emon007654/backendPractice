const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/regTestTwo')
  .then(() => console.log('we are connected with regTestTwo'))
  .catch((e) => console.log(e))
