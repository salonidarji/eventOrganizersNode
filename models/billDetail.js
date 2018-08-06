var db=require('../dbconnection');

var detail = {
    getAllDetail(callback)
    {
        return db.query("select * from bill_details_tbl",callback);
    },
    getDetail(id,callback)
    {
        return db.query("select * from bill_details_tbl where fk_bill_no=?",id,callback);
    },
    addDetail(item,callback)
    {   
       var value=[];
        for(let i=0;i<item.length;i++){
            value[i]=[item[i].fk_dish_id,item[i].qty,item[i].bill_price,item[i].remark,item[i].fk_bill_no];
        }
        console.log(value);
        return db.query("INSERT into bill_details_tbl (fk_dish_id,qty,bill_price,remark,fk_bill_no) VALUES ?",[value],callback);        
    },
    
};
module.exports=detail;