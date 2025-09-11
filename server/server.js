const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const colors = require('colors')

// donfig dotenv
dotenv.config();

// rest object
const app = express()


// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())



// routes
app.get('/' , (req , res )=>{
    res.send('<h1>Hello form express</h1>')
})


//port
const PORT = process.env.PORT || 4040

// listenig to the server
app.listen(PORT , ()=>{
    console.log(`http://localhost:${PORT}`.bgCyan.white);
})