const mongoose=require("mongoose")

const PostSchema= new mongoose.Schema({
    title:{
       type: String,
       required:true,
       unique:true,
    },
    desc:{
        type: String,
       required:true,
    },
    photo:{
        type: String,
        required:false
    },
    username:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
        required:false
    }

},{timeseries:true});
PostSchema.add({ createdAt: { type: Date, default: Date.now } });
module.exports=mongoose.model("Post",PostSchema)
