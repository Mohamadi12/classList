const express=require('express')
const routeController=express()
const{getAll, ajout, update, remove}=require('../controllerRoute/controllerRoute')

routeController.get('/Allliste',getAll)
routeController.post('/Ajoutliste',ajout)
routeController.put('/Updateliste/:id',update)
routeController.delete('/Removeliste/:id',remove)





module.exports=routeController