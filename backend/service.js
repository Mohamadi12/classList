const express=require('express')
const cors=require('cors')
const routeController = require('./routeController/routeController')
const connect  = require('./config/contactDB')
const app=express()
const port=5000

app.use(express.json())
app.use(cors())
app.use('/contact',routeController)
connect()







app.listen(port,(err)=>{
    err? console.log(err):console.log(`Yes, successfull ${port}`)
})