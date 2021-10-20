const express = require('express')
  
  const router = require('./routers/')
  const app = express()

  app.use(router.getUsers)


const express = require('express')

const app = express()

app.use((req, res, next) => {
  next()
})

// the GET Method
app.get('/users', (req, res) => {


  res.send('success')
})

// the POST Method
app.post('/users/:id', (req, res) => {


const UserId = req.params.id


res.send('Hello user{userId}'.)
})

// the PUT Method
app.put('/users')

// the DELETE Method
app.delete('/users')

app.listen(8000, () => {
  console.log('Server is listening on port 8000.')
})
