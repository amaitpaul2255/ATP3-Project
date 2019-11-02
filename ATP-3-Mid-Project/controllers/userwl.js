var express = require('express');
var user = require('../models/user_model');
var router = express.Router();

/*router.get('*', function(request, response, next){
    if(request.session.email != ""){
		next();
	}else{
		response.redirect('/logout');
	}
    
});*/

router.get('/',function(request, response){  
        response.render('user/index');
    });

router.get('/abouthospital',function(request, response){   
        response.render('notregisteruser/abouthospital');   
});

router.get('/contactus',function(request, response){   
    response.render('user/contactus');   
});

router.get('/department',function(request, response){   
    response.render('user/department');   
});

router.get('/news',function(request, response){   
    response.render('user/news');   
});

router.get('/narses',function(request, response){   
    response.render('user/narses');   
});

router.get('/noticebord',function(request, response){   
    response.render('user/noticebord');   
});

router.get('/gallery',function(request, response){   
    response.render('user/gallery');   
});


module.exports = router;