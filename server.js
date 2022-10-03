const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

// Have to talk about best routing but for now im just making sure they work

// app.use()
// app.use()

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
