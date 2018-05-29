import mongoose from 'mongoose'

const Schema = mongoose.Schema;


const doctorSchema = new Schema({
    
    dt:String,
    time: Array
})


const doctorAvilable = mongoose.model('tym', doctorSchema);



export default doctorAvilable;