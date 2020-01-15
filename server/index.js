const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json())

app.get('/bugs', (req,res)=>{
    console.log("bugs requested");
    res.sendStatus(200);
});
app.post('/bugs', (req, res)=>{
    console.log("Bug post received");
    res.sendStatus(200);
});

//server.listen
app.listen(port, ()=>{
    console.log("Listening on port "+port);
})