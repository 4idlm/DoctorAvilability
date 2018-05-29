import express from 'express'
import mongoose from 'mongoose'
import morgan  from 'morgan'
import cors from 'cors'
import bodyParser  from 'body-parser'

const app = express();

//mongoose setup
mongoose.connect('mongodb://localhost/doctor');
 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
 


app.use(morgan('combined'))


app.use(cors())




import DoctorRoutes from './api/route/route'


app.use('/',  DoctorRoutes);




export default app;
