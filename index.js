const express = require('express')

const app = express()
const port = 3333

app.get('/',(req,res) =>{
    res.send("Hello ini express")
})


app.get('/pedro',(req,res) =>{
    res.send("Hello ini pedro")
})

app.listen(port,() => console.log(`Server running on port $(port)`))
