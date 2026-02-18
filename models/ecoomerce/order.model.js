import mongoose from "mongoose";
const orderItemsSchema = new mongoose.Schema({
 productId:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"Product",
     required:true
    },
 quantity:{
     type:Number,    
     required:true
        
    }
})
const orderSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true   
    },

    price:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true},

    orderItems:[orderItemsSchema],
    status:{
    type:String,
    enum:["pending","cancelled","delivered"],
    default:"pending"
    }





},{timestamps:true})

export const Order = mongoose.model("Order", orderSchema)