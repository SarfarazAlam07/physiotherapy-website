const express  = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express();
const PORT = process.env.PORT || 4040

// Middleware
app.use(cors())
app.use(express.json())

app.get('/', (req , res )=>{
    res.send('Hello World!')
})



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
