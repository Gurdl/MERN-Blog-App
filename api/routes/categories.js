const User = require("../models/User");
const Category = require("../models/Category");
const router=require("express").Router();

//Create the category:
router.post("/",async(req,res)=>
{
    const newCat= new Category(req.body);
    try{

        const savedCat= await newCat.save();
        res.status(200).json(savedCat)
    }catch(error){
       res.status(400).json(error)
    }

})
//Get all the categories:
router.get("/",async(req,res)=>
{
    try{

        const allCat= await Category.find();
        res.status(200).json(allCat)
    }catch(error){
       res.status(400).json(error)
    }

})


module.exports = router
