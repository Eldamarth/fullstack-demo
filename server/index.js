const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const database = require('./db/queries');
const cors = require('cors');

app.use(bodyParser.json())
app.use(cors());

app.get('/bugs', (req,res)=>{
    console.log("bugs requested");
    database.viewAllBugs()
    .then (result => {

        return res.send(result)})
    .catch (err => {throw err})
});
app.post('/bugs', (req, res)=>{
    console.log("Bug post received");
    database.newBug(req.body)
    .then(result => res.send(result))
    .catch(err => {throw err})
});

//server.listen
app.listen(port, ()=>{
    console.log("Listening on port "+port);
})