const express=require('express');
const dotEnv=require('dotenv')
const app=express();

dotEnv.config({
    path:'backend/config/config.env'
})
const PORT=process.env.PORT || 4000
app.get('/',(req,res)=>{
    res.send('Server is running')
})


app.listen(PORT,(error)=>{
    if(!error){
        console.log(`server is running port ${PORT}`)
    }
})