const mongoose=require('mongoose')

const contactSchema=mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('contactSchema',contactSchema)