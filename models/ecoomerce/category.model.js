import mongoose from "mongoose";
const categorySchema = mongoose.Schema({
name:{
    type: String,
    required: true,
    unique: true}
},{timeStamps : true});

export const Category = mongoose.model("Category", categorySchema)