const express = require('express')
const app = express()
require('dotenv').config()
const categoryRouter = require('./api/category/router')
const userRouter = require('./api/user/router')
const productsRouter = require('./api/products/router')
const brandsRouter = require('./api/brands/router')
const mailerRouter = require('./api/mailer/router')
const oderRouter = require('./api/orders/router')

// const mongoose = require('mongoose')


const port = process.env.SERVER_PORT || 3500

const cors = require('cors')
const path = require('path')

// const clientPath = path.join(__dirname, './client/dist')



app.use(express.json())
app.use(cors())
// app.use('/', express.static(clientPath))
app.use('/api', userRouter)
app.use('/api', productsRouter)
app.use('/api', brandsRouter)
app.use('/api', categoryRouter)
app.use('/api', mailerRouter)
app.use('/api', oderRouter)



// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log("DB Connected"))
//     .catch((err) => console.log(err.message))


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './client/dist/index.html'))

// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})