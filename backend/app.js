const express = require('express')
const app = new express()

app.get('/',(req,res)=>{
    res.end('hello express')
})

app.get('/api/list',(req,res)=>{
    res.statusCode = 200
    res.json({
        list:[{
            name:"sjm",
            age:23
        },
        {
            name:"2222",
            age:30
        }]
    })
})

app.listen(4000,()=>{
    console.log('express as 4000')
})