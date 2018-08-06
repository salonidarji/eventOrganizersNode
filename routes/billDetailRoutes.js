var express=require('express');
var router=express.Router();
var detail=require("../models/billDetail");

router.post('/',function(req,res,next){
    detail.addDetail(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.get('/:id?',function(req,res,next){
    if(req.params.id){
        detail.getDetail(req.params.id ,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }
    else{
        detail.getAllDetail(function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }
    
});
module.exports=router;