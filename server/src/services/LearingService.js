const Learning = require('../models/Learning')






class LearningService{
     getLearningPath(){
        return new Promise(async (resolve, reject) => {
            try {
                 
                const learningPath = await Learning.find({})



              
                    resolve({
                        status: '200',
                        message: 'SUCCESS',
                        data: {learningPath}
                    })
            } catch (e) {
                reject(e)
            }
        })



    }
    getPathInfor(slug){
        return new Promise(async (resolve, reject) => {
            try {
                 
                const learningInfor = await Learning.find({slug})



              
                    resolve({
                        status: '200',
                        message: 'SUCCESS',
                        data: {learningInfor}
                    })
            } catch (e) {
                reject(e)
            }
        })


    }
}

module.exports = new LearningService