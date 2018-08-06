var express = require('express');
var router = express.Router();
var cuisine = require('../models/cuisine');

router.get('/:id?', function(req, res, next) {
    if(req.params.id){
        cuisine.getCuisine(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });

    }
    else{
        cuisine.getAllCuisine(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});

router.post('/',function(req,res,next){
    cuisine.addCuisine(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){
    cuisine.deleteCuisine(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/:id',function(req,res,next) {
    cuisine.updateCuisine(req.params.id, req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports = router;
