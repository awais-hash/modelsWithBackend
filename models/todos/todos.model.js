import mongoose from 'mongoose';

const todosSchema = new mongoose.Schema({

title:{
type: String,
    required: true
},
content:{
    type: String,
    required: true
},
createdBy :{
type :mongoose.Schema.Types.ObjectId,
ref : "User"

}
,
subTodos:[
{
type: mongoose.Schema.Types.ObjectId,
ref : "subTodo"
}
]




}, 

{ timestamps: true })

export const Todos = mongoose.model('Todos', todosSchema)
