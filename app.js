const express = require('express')

const app = express()
app.get('users', (req, res) => {
  res.json([{
    naame: 'bahdcoder',
    email: 'bahdcoder@gmail.com',
    password: 'ooo-ooo-ooooo'
  }])
})
app.listen(3000, () => {
  console.log('APP RUNNING ON PORT 3000')
})
