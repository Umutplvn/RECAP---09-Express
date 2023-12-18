"use strict"

const middleFunc1 = (req, res, next)=>{
        res.data=[
            req.customData= 'Req',
            res.customData= 'Res',
        ]
       
        next()
    }

const middleFunc2 = (req, res, next)=>{
    res.data=[
        req.customData= 'Req1',
        res.customData= 'Res1',
    ]
    
next()
}

module.exports = [middleFunc1, middleFunc2]
