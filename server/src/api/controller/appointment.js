import doctorAvilable from '../model/appointment'



const create_doctor = (req, res) => {
 
   
const Doctor = new doctorAvilable({ dt: req.body.dt, time :  req.body.time });

Doctor.save().
then((response)=>{
res.json({
    response
})

}).catch((err)=>{
    res.json({
        err
    })
})

}
 
 export default {

    create_doctor

 }