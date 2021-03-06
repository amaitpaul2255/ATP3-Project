var db = require('./db');

module.exports = {

    insertStaff: function(staff, callback){

		var sql ="insert into staff values('', ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		db.execute(sql, [staff.firstname, staff.lastname,staff.dob, staff.gender,staff.email, staff.phone,staff.password,staff.salary, staff.pic], function(status){
			callback(status);
		});
	},
	insertStaffLog: function(log, callback){

		var sql ="insert into login values('', ?, ?, ?)";
		db.execute(sql, [log.email,log.password, log.type], function(status){
			callback(status);
		});
    },
    getInfo: function(email, callback){

		var sql ="select * from admin where email=?";
		db.getResults(sql, [email], function(results){
			
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback([]);
			}
		});
    },
    insertDoctor: function(doctor, callback){

		var sql ="insert into doctor values('', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		db.execute(sql, [doctor.firstname, doctor.lastname,doctor.dob, doctor.gender,doctor.email, doctor.department, doctor.phone,doctor.password,doctor.salary, doctor.pic], function(status){
			callback(status);
		});
	},
	insertDoctorLog: function(log, callback){

		var sql ="insert into login values('', ?, ?, ?)";
		db.execute(sql, [log.email,log.password, log.type], function(status){
			callback(status);
		});
    }
}