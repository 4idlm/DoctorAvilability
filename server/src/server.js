 import http  from 'http';
 import app from './app';


let server =  http.createServer(app);

let port = process.env.PORT || 4500;

server.listen(port,()=>{
    console.log(`This application will be run on ${port}`)
})
