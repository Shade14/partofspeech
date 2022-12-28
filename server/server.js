const express = require('express')

const wordsRouter = require('./routes/words')
const rankRouter = require('./routes/rank')

const app = express()

// setting a dynamic port or running it on port 5000 as react runs at 3000 by default
const port = process.env.PORT || 5000

app.use(express.json())

app.use('/words', wordsRouter)
app.use('/rank', rankRouter)

app.listen(port, () => console.log(`Listening to port ${port}...`))