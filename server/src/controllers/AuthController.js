const authService = require('../services/AuthService')
class AuthController{
   async getAll(req,res){
        const response = await authService.getAll()
        res.json(response)
    }



}
module.exports = new AuthController