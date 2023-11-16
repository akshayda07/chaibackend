require('dotenv').config()


const express = require("express")

const app = express()

const port = 3000;

app.get('/',(req,res)=>{
        res.send("hello akshay home page")
})

app.get('/twitter',(req,res)=>{
      res.send("this is twitter route page")
})

app.get('/login',(req,res)=>{
  res.send('<h1>plases login at code</h1>')
})

app.get('/youtube',(req,res)=>{
res.send('<h1>thsis youtube</h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`app lising to the  port ${3000}`);
})