"use strict";var db=require("../config/db.config.js"),config=require("../config/config.js"),ROLEs=config.ROLEs,User=db.user,Role=db.role;checkDuplicateUserNameOrEmail=function(s,o,r){User.findOne({where:{username:s.body.username}}).then(function(e){if(e)return console.log(s.body.username),void o.status(400).send("Hata -> Bu kullanıcı adı kullanılmakta!");User.findOne({where:{email:s.body.email}}).then(function(e){e?o.status(400).send("Hata -> Bu mail kullanılmakta!"):r()})})},checkRolesExisted=function(e,s,o){console.log(123);for(var r=0;r<e.body.roles.length;r++){if(!ROLEs.includes(e.body.roles.toUpperCase()))return void s.status(400).send("Hata -> Böyle bir rol yok = "+e.body.roles);console.log(1234)}console.log("werewer"),o()};var signUpVerify={};signUpVerify.checkDuplicateUserNameOrEmail=checkDuplicateUserNameOrEmail,signUpVerify.checkRolesExisted=checkRolesExisted,module.exports=signUpVerify;