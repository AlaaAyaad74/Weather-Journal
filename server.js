// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const port=3000;
// Start up an instance of app
const app=express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
app.post('/saveData',addData)
function addData(req,res){
    newData={
    temp=req.body.temp,
    content=req.body.content,
    date=req.body.date}
    projectData.push(newDate)
}
app.get('/getObJ',(req,res)=>{
    res.send(projectData )
    projectData=[];
})
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(port,()=>{
console.log('Alaa Ayaad')});