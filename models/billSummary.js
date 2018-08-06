var db=require('../dbconnection');
var summary={
    addSummary(item,callback)
    {
        var today = new Date();
        return db.query("INSERT into bill_summary_tbl VALUES(?,?,?,?)",[item.bill_no ,item.bill_amount,today,item.fk_user_id],callback);
    },
    getAllSummary(callback)
    {
        return db.query("select * from bill_summary_tbl",callback);
    },
    getSummaryByUser(id,callback){
        return db.query("select * from bill_summary_tbl where fk_user_id=?",id,callback);

    },
    getAutovalue(callback)
    {
        return db.query("SELECT LAST_INSERT_ID()",callback);
    }
};
module.exports=summary;