"use strict";var jwt=require("jsonwebtoken"),config=require("../config/config.js"),db=require("../config/db.config.js"),Role=db.role,User=db.user;verifyToken=function(s,r,t){var e=s.headers["x-access-token"];if(!e)return r.status(403).send({auth:!1,message:"Geçersiz token..."});jwt.verify(e,config.secret,function(e,n){if(e)return r.status(500).send({auth:!1,message:"İşlem başarısız. Hata -> "+e});s.userId=n.id,t()})},isAdmin=function(n,s,r){n.headers["x-access-token"];console.log(n.userId),User.findByPk(n.userId).then(function(e){console.log(n.userId),e.getRoles().then(function(e){for(var n=0;n<e.length;n++)if(console.log(e[n].name),"ADMIN"===e[n].name.toUpperCase())return console.log(e[n].name),void r();return s.status(403).send("Admin rolü gerekli!")})})};var authJwt={};authJwt.verifyToken=verifyToken,authJwt.isAdmin=isAdmin,module.exports=authJwt;