const mongoose = require('mongoose')

console.log('Connecting to MongoDB...')

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB is connected'))
  .catch((err) => console.error(err))
