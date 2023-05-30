const express = require('express')
const format = require('date-format')

const app = express()
const DateTime = format.asString("dd/MM/yyyy - hh:mm:ss",new Date());

const PORT = 4000 || process.env.PORT


app.get('/',(req , res) =>{
    res.status(200).send('<h1>hai rohan <h1>');
});

app.get("/api/v1/instagram",(req,res)=>{
    const instaSocial = {
        username: "Rohan C Jadhav",
        followers:150,
        follows:900,
        date: DateTime,
    }

    res.status(200).json(instaSocial)
})

app.get("/api/v1/facebook",(req,res)=>{
    const instaSocial = {
        username: "Rohan C Jadhav",
        friends:800,
        closefriends:12,
        date: DateTime,
    }

    res.status(200).json(instaSocial)
})

app.get("/api/v1/LinkedIn",(req,res)=>{
    const instaSocial = {
        username: "Rohan C Jadhav",
        peers:220,
        connects:1200,
        date: DateTime,
    }

    res.status(200).json(instaSocial)
})

app.get('/api/v1/:token',(req , res)=>{
    console.log(req.params.token);
    res.status(200).json({param: req.params.token});
})

app.listen(PORT,() =>{
    console.log(`server is running at ${PORT}`);
});


