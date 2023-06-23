const learingService = require('../services/LearingService')
class LearningController{
   async getLearningPath(req,res){
        const response = await learingService.getLearningPath()
        res.json(response)
    
    }
   async getPathInfor(req,res){
        const response = await learingService.getPathInfor('back-end-developer')
        res.json(response)
    

    }



}
module.exports = new LearningController