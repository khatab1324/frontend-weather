
const {MongoClient}=require('mongodb')
//should be changed 
var connection="mongodb+srv://Osama-Subani:osamasubani@cluster0.iqjg8p6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client=new MongoClient(connection)

const mydb= client.db('firstdb')  // should be changed 

const collection= mydb.collection('users') // should be changed



const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', function(req,res)
{
    res.send("start my server")
})

app.get('/getData',function(req,res){
    var data={name:"osama",age:20,field:"SE"}
    res.json(data)
})

app.get('/getPrice',function(req,res){
    var prices={price1:"10 JD",price2:"20 JD",price3:"12 JD"}
    res.json(prices)
})

var server= app.listen(9000, function()
{
    var host = server.address().address
    var port= server.address().port
})