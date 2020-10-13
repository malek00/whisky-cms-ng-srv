const express = require('express');
const app = express();
const api = require('./api/v1/index');
const cors =require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connection = mongoose.connection;
app.set('port', 3000 );/*process.env.port||*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use((req,res,next)=>
{
	console.log(`cette requette est lancé a ${new Date()}`);
	next();
});
app.use('/api/v1',api);//localhost:3000/api/v1
app.use((req,res)=>{
	const err = new Error('404 Not Found !!!!!!');
	err.status = 404;
	res.json({msg:'404 Not Found !!!!!!',err:err});
});
mongoose.connect('mongodb://localhost:27017/whiskycms',{useNewUrlParser:true});
connection.on('error',(err)=>{
	console.error(`connction to mongodb error ${err}`);
});
connection.once('open',()=>{
	console.log('Connected to mongo db');
});
app.listen(app.get('port'),()=>{
	console.log(`express server listening on port ${app.get('port')} !!!!!`);
});

 