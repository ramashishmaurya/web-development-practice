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
    try {
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

// this is for the geeting the data 
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

// 
app.get('/person/:worktype' ,async(req ,res)=>{
    try{
    // the values is th params here 
    const worktype = req.params.worktype ; 
    if (worktype =='chef' || worktype=="waiter" || worktype=='manager') {
        const response = await person.find({work:worktype}) ;
        res.status(200).json(response) ; 
    } 

    }catch(errro){
       console.lo("this is error right ") ;
       res.status(400).json({erro:"there is server issues"}) ; 
    }

}) ; 
// there is logic of routes
// const personroutes = require('../routes/personRoutes'); 


// app.use('/person' , personroutes) ; 

// this is update function

app.put('/person/:id', async (req, res) => {
    try {
        const updateid = req.params.id;
        const updatedata = req.body;

        const response = await person.findByIdAndUpdate(
            updateid,
            updatedata,
            {
                returnDocument: 'after', // ✅ updated syntax
                runValidators: true
            }
        );

        console.log("Data is updated successfully");
        res.status(200).json(response);

    } catch (error) {
        console.log("there is error inside it", error);
        res.status(400).json({ error: "Something went wrong" });
    }
});



app.listen(8080 ,()=>{
   console.log(`i am listening at port ${8080}`)
}) ;

// how the updates one can perform that has to make the values as well right 
