 
import express from 'express'
const router = express.Router();
import  create from  '../controller/appointment'


router.post('/adding',create.create_doctor)


export default router