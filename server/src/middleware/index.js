var jwt = require('jsonwebtoken');
function authozation(req,res,next){
    const token  = req.body.token;
    const authozationToken  = token.split( ' ')[1];
    jwt.verify(authozationToken,process.env.ACCESS_TOKEN,(err,data)=>{
        if(err){
          return  res.json({
                status:'ERROR',
                message:'Authozation',
                statusCode:401,
            })
        }
        next();
    })

}


module.exports = authozation

