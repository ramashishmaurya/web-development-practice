

function changecolor(color , delay , nextcolorchange){
setTimeout(() => {
    h2.style.backgroundColor = color ; 
    nextcolorchange() ; 

},delay);
} 
 
changecolor('red' ,1000 ,()=>{
    changecolor('yellow',1000 ,()=>{
        changecolor('blue',1000);
    });
 })


function savedb(data , sucess , failure){
    let internetspd = Math.floor(Math.random()*10 +1) ;
    if(internetspd>4){
        console.log('Data is saved' , internetspd) ;
        sucess();
    }
    else{
        console.log('inter connection is weak' , internetspd);
        failure();
    } 
}


function savedb(){
    return new Promise((sucess , failure )=>{
        let internetspd = Math.floor(Math.random()*10 +1) ;
        if(internetspd>4){
            sucess();
        }else{
            failure();
        }
    })
}

savedb("Ashish" ,()=>{
    console.log('data is succcefully saved')
    savedb("hello",()=>{
        console.log('data is saved');
    },()=>{
        console.log("not able to save") ;
    });
},
()=>{
   console.log('failure saved right  ')
});

function savedb(data){
    return new Promise((sucess , failure )=>{
        let internetspd = Math.floor(Math.random()*10 +1) ;
        if(internetspd>4){
            sucess("suceessfully connect");
        }else{
            failure('failed successfully') ;
        }
    });
}
savedb("Ashish") ;

//let request = savedb("Ashish") ; 

savedb("Apna Collage")
.then((result)=>{
    console.log("sucessfully completed right ");
    console.log("result values is " , result);
    return savedb("Maurya");
})
.then((result)=>{
    console.log("Second Data is stored");
    console.log("then values is " , result);
    return savedb("AShsihs");
})
.then(()=>{
    console.log("databases 3 inserted");
})

.catch((error)=>{
   console.log("promise was rejected")
   console.log("error = " , error);
});  




let h2 = document.querySelector('h2') ; 

function changecolor(color , delay ){
    new Promise((sucess , failed)=>{
        setTimeout(() => {
            h2.style.backgroundColor = color ; 
            sucess('sucessfully change the background') ;
            
        },1000);
    })
         
};
changecolor('red' , 1000);


function changecolor(color , delay , nextcolor ){
    setTimeout(() => {
        h2.style.backgroundColor = color ;
        nextcolor() ;  

    }, delay);
}

changecolor('red' , 1000 , ()=>{
    changecolor('pink',1000)
} );



function changecolor(color , dealy){
new Promise((success , failure)=>{
      setTimeout(() => {
        h2.style.backgroundColor = color ; 
        success("this is sucesssive values")
      }, dealy);
})

}

changecolor('red', 2000)
.then(() => {
    console.log('red color is printing');
    return changecolor('pink', 2000)
})
.then(() => {
    console.log("pink color is printing");
    return changecolor('black', 2000)
})
.then(() => {
    console.log("black color has been printing");
})
.catch((err) => {
    console.log("Error is printing =", err);
});


async function abc(){
    throw "ashish is the error right  "
    return "ashish" 
}

