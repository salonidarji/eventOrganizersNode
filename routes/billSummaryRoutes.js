var express = require('express');
var router = express.Router();
var summary = require('../models/billSummary');

router.get('/:id?',function(req,res,next){
  if(req.params.id){
      summary.getSummaryByUser(req.params.id ,function(err,rows){
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
     summary.getAllSummary(function(err,rows){
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

router.post("/", function(req, res, next) {
  summary.addSummary(req.body, function(err, rows) {
    if (err) 
    {
      res.json(err);
    } 
    else
    {
      console.log(rows.insertId);
      res.json(rows);
    }
  });
});



module.exports = router;