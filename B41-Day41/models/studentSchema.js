import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mentor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'mentor.name'
    }
})

export default mongoose.model('student',studentSchema);