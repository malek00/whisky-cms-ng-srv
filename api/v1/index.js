const express = require('express');
const router = express.Router();
router.get('/ping',(req,res)=>{
	res.status(200).json({msg:'png',date : new Date()});
});//localhost:300/ping

module.exports=router;