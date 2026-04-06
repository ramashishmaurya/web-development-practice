const express = require('express') ;
const app = express() ; 
const db = require('./db') ; 

const bodyParser = require('body-parser') ;
app.use(bodyParser.json()) ; 

const person = require('./models/person') ;

app.get('/',(req,res)=>{
    res.send("thi is the main pages right ") ;
}) ; 

app.get('/paneer' ,(req ,res)=>{
    var detail ={
       name:"ashish"  , 
       "school":"hindi"
    }  
    res.send(detail) ;

app.post('/student' ,(req ,res)=>{
  res.send("data is saved") ; 
})
    
});

app.post('/person' ,async(req ,res)=>{
    try{
    const data = req.body ; 
    const newPerson = new person(data) ;

    const response = await newPerson.save() ;
    console.log('data is saved') ;
    res.status(200).json(response) ;
    }
    catch(error){
        console.log("we are getting the error") ; 
        res.status(500).json({error:"internal server error"})
    }

}) ;


app.get('/person' ,async(req ,res)=>{
    try{
         const data =  await person.find() ;
         console.log('fetch data successfully') ; 
         res.status(200).json(data) ;
    }
    catch(error){
      console.log(error) ; 
      res.status(500).json({error:"not able to extract"})
    }
})



app.listen(8080 ,()=>{
   console.log(`i am listening at port ${8080}`)
}) ;

