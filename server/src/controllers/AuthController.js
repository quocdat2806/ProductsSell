const homeService = require('../services/HomeService')
class HomeController{
   async getAll(req,res){
        const response = await homeService.getAll()
        res.json(response)
       

    }



}
module.exports = new HomeController