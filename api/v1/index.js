const express = require('express'); 
const BlogPost = require('../../models/blogpost');
const router = express.Router();
router.get('/ping',(req,res)=>{
	res.status(200).json({msg:'png',date : new Date()});
});//localhost:300/ping
router.get('/blog-posts',(req,res)=>{	 
	BlogPost.find( ).sort({'createdOn':-1})
		.exec()
		.then(blogposts=>res.status(200).json(blogposts))
		.catch(err=>res.status(500).json({message:'not found',error:err}));
});
router.get('/blog-posts/:id',(req,res)=>{	 
	BlogPost.findById(  req.params.id ) 
		.then(blogposts=>res.status(200).json(blogposts))
		.catch(err=>res.status(500).json({message:'not found',error:err}));
});
router.post('/blog-posts',(req,res)=>{
	console.log('req.body',req.body);
	const post = new BlogPost(req.body);
	post.save((err,blog)=>
	{
		if(err){
			return res.status(500).json(err);
		}
		res.status(201).json(blog);
	});
});
router.delete('/blog-posts/:id',(req,res)=>{	 
	BlogPost.findByIdAndDelete(  req.params.id ) 
		.then(blogposts=>res.status(200).json(blogposts))
		.catch(err=>res.status(500).json({message:'not found',error:err}));
});
module.exports=router;