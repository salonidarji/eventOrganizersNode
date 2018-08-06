var db=require('../dbconnection');
var Event = {

    getAllEvent:function(callback){
        return db.query("select * from event_tbl",callback);
    },
    getEvent:function(id,callback){
        return db.query("select * from event_tbl where event_id=?",id,callback);
    },
    addEvent:function(event,callback){
        return db.query("insert into event_tbl values(?,?,?,?)",
        [event.event_id,event.event_name,event.event_type,event.event_price],
        callback);
    },
    deleteEvent:function(id,callback){
        return db.query("delete from event_tbl where event_id=?",id,callback);
    },
    updateEvent:function(id,event,callback){
        return db.query("update event_tbl set event_name=?,event_type=?,event_price=? where event_id=?",
        [event.event_name,event.event_type,event.event_price,id],
        callback);
    }
};
module.exports = Event;