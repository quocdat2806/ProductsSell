const authService = require('../services/AuthService')
class HomeController{
   async getAll(req,res){
        const response = await authService.getAll()
        res.json(response)
       

    }



}
module.exports = new HomeController