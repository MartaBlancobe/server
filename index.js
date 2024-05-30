const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const indexRoutes = require('./src/routes/indexRoutes.ts')
const userRoutes = require('./src/routes/userRoutes.ts')

app.use('/', indexRoutes);
app.use('/backOffice/', userRoutes);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})