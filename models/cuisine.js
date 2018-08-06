var db=require('../dbconnection');
var cuisine = {

    getAllCuisine:function(callback){
        return db.query("select * from cuisine_tbl",callback);
    },
    getCuisine:function(id,callback){
        return db.query("select * from cuisine_tbl where cuisine_id=?",id,callback);
    },
    addCuisine:function(cuisine,callback){
        return db.query("insert into cuisine_tbl values(?,?)",
        [cuisine.cuisine_id,cuisine.cuisine_name],
        callback);
    },
    deleteCuisine:function(id,callback){
        return db.query("delete from cuisine_tbl where cuisine_id=?",id,callback);
    },
    updateCuisine:function(id,cuisine,callback){
        return db.query("update cuisine_tbl set cuisine_name=? where cuisine_id=?",
        [cuisine.cuisine_name,id],
        callback);
    }
};
module.exports = cuisine;