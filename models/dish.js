var db=require('../dbconnection');
var dish = {

    getAllDish:function(callback){
        return db.query("select * from dish_tbl",callback);
    },
    getDish:function(id,callback){
        return db.query("select * from dish_tbl where fk_cuisine_id=?",id,callback);
    },
    addDish:function(dish,callback){
        return db.query("insert into dish_tbl values(?,?,?,?,?)",
        [dish.dish_id,dish.dish_name,dish.dish_price,dish.dish_img,dish.fk_cuisine_id],
        callback);
    },
    deleteDish:function(id,callback){
        return db.query("delete from dish_tbl where dish_id=?",id,callback);
    },
    updateDish:function(id,dish,callback){
        return db.query("update dish_tbl set dish_name=?,dish_price=?,dish_img=?,fk_cuisine_id=? where dish_id=?",
        [dish.dish_name,dish.dish_price,dish.dish_img,dish.fk_cuisine_id,id],
        callback);
    }
};
module.exports = dish;