const express=require('express')
const contactSchema=require('../model/contact')


exports.getAll=async (req,res)=>{
    try {
        const contacts= await contactSchema.find({})
        res.status(200).json({msg:'Voici la iste',contacts})
    } catch (err) {
        console.log(err)
    }
}

exports.ajout=async (req,res)=>{
    try {
        const ajouter=new contactSchema(req.body)
        await ajouter.save()
        res.status(200).json({msg:'Ajouter'})
    } catch (err) {
        console.log(err)
    }
}

exports.update=async (req,res)=>{
    try {
        const {id}=req.params
        const updated= await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).json({msg:'update'})
    } catch (err) {
        console.log(err)
    }
}

exports.remove=async (req,res)=>{
    try {
        const {id}=req.params
        const removed= await contactSchema.findByIdAndUpdate(id)
        res.status(200).json({msg:'remove'})
    } catch (err) {
        console.log(err)
    }
}