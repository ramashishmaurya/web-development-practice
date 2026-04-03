let p = document.querySelector('p') ; 
let h1 = document.querySelector('h1') ; 

function changecolor(){
    console.dir(this.innerHTML) ;
    this.style.backgroundColor="red" ;
    this.style.color = 'yellow' ;
};  
p.addEventListener('click',changecolor);

h1.addEventListener('click',changecolor);
// this is always takes the corrent file excuting as well 

// keyboard pressed here right 
let input = document.querySelector('input');
input.addEventListener('keydown',()=>{
    console.log('key is pressed right') ; 
}) ; 

// this is someone done all the work right 
let form = document.querySelector('.form form') ; 
form.addEventListener('submit' , function(event){
    event.preventDefault() ;
    // make the id to extract the user and passord  
    let user = document.querySelector('#user');
    let pass = document.querySelector('#pass'); 
    console.log(user.value) ; 
    console.log(pass.value);
    console.log(event); 
    
}) ;

// to do app 


