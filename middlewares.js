"use strict"


const express = require('express')
const app=express()

require('dotenv').config()
const PORT=process.env.PORT

/*----------------------------------------*

    
const middleFunc1 = (req, res, next)=>{
    const skip=req.query.skip 
    customData=[
        req.customData= 'Req',
        res.customData= 'Res',
    ]
    if(skip){
       res.redirect('/sec')
    }else{
        next()
    }

}

const middleFunc2 = (req, res, next)=>{
    customData=[
        req.customData= 'Req 1',
        res.customData= 'Res 1',
    ]
next()
}

/*----------------------------------------*/


const [middleFunc1, middleFunc2] = require('./middlewares/index')

// app.get('/', [middleFunc1, middleFunc2 ], (req, res)=>{
//     res.send({
//         message:'Welcome',
//         resMessage:res.customData,
//         reqMessage:req.customData,

//     })
// })

app.use(middleFunc1, middleFunc2)

app.get('/*', (req, res)=>{
    res.send({
                message:'Welcome',
                resMessage:res.data,

            })
} )




/*----------------------------------------*/
app.listen(PORT, ()=>console.log(`Running on http://127.0.0.1:${PORT}`))