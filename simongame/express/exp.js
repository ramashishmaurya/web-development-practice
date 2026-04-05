const express = require('express') ; 
const app = express() ;
let port = 3000; 
app.listen(port ,()=>{
    console.log('i am able to listen you `${port}`');
})
app.use((request ,res)=>{
    console.log("request is succesfully ") ;
     res.send("this is send function right");
});

// app.get('/:username',((req , res)=>{
//     console.log(res) ;
//     res.send({
//         name:"Ashish" , 
//         Learing :"express"
//     }) 
// }));