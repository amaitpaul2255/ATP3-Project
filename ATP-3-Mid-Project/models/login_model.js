var db = require('./db');

module.exports = {

    validate: function(user, callback){

		var sql ="select * from login where email=? and password=?";
		db.getResults(sql, [user.email,user.password], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
    }
}