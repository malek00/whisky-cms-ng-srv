const mongoose =require('mongoose');

const blogpostSchema= new mongoose.Schema({
	title:String,
	subTitle:String,
	image:String,
	content:String,
	createdOn:{type:Date,default:Date.Now}
});

module.exports=mongoose.model('BlogPost',blogpostSchema) ;