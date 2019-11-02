var express = require('express');
var login = require('../models/login_model');
var router = express.Router();

router.get('/', function(request, response){
    response.render('login/index');
});


router.post('/', function(request, response){
    var user = {
        email: request.body.email,
        password: request.body.password
    }
    login.validate(user, function(result){
        if(result)
        {
            if(result.type==1)
            {
                request.session.email=request.body.email;
                response.redirect('/admin');
            }
            else if(result.type==2)
            {
                request.session.email=request.body.email;
                response.redirect('/doctor');
            }
            else if(result.type==3)
            {
                request.session.email=request.body.email;
                response.redirect('/staff');
            }
            else if(result.type==4)
            {
                request.session.email=request.body.email;
                response.redirect('/user');
            }
            else
            {
                response.redirect('/user');
            }
        }
        else
        {
            response.redirect('/user');
        }
    });
});

module.exports = router;