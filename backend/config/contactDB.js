const mongoose=require('mongoose')


const contactDB=async ()=>{
    try {
        await mongoose.connect('mongodb+srv://moha1:mIUtXI192wL0fMss@cluster0.n06tzyl.mongodb.net/?retryWrites=true&w=majority')
        console.log('Successfull')
    } catch (err) {
        console.log(err)
    }
}

module.exports=contactDB